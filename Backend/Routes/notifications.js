const express = require('express');
const router = express.Router();
const Book = require('../models/books');
const Request = require('../models/requests');
const Notification = require('../models/notificationSchema');
const auth = require('../middlewares/auth');

// Get all notifications for the logged-in user
router.get('/', auth, async (req, res) => {
    const userId = req.user._id;
    try {
        const notifications = await Notification.find({ user: userId })
            .sort({ createdAt: -1 })
            .populate('book', 'title')
            .populate('request', 'status');
        res.json(notifications);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching notifications" });
    }
});

// Owner responds to a borrow request (accept / reject)
router.post('/reply', auth, async (req, res) => {
    const { notificationId, action } = req.body;

    if (!['accept', 'reject'].includes(action)) {
        return res.status(400).json({ message: "action must be 'accept' or 'reject'" });
    }

    try {
        const notification = await Notification.findById(notificationId);
        if (!notification) {
            return res.status(404).json({ message: "Notification not found" });
        }

        // Only the notification's recipient (the book owner) can act on it
        if (notification.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to respond to this request" });
        }

        const request = await Request.findById(notification.request);
        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }
        if (request.status !== 'pending') {
            return res.status(400).json({ message: `Request already ${request.status}` });
        }

        if (action === 'accept') {
            request.status = 'accepted';
            await request.save();

            const book = await Book.findByIdAndUpdate(
                request.book,
                { available: false },
                { new: true }
            );

            // Auto-reject every other still-pending request for this same book
            const otherPending = await Request.find({
                book: request.book,
                _id: { $ne: request._id },
                status: 'pending',
            });

            for (const other of otherPending) {
                other.status = 'rejected';
                await other.save();
                await Notification.create({
                    user: other.requester,
                    book: request.book,
                    request: other._id,
                    message: `Sorry, "${book?.title || 'this book'}" has been lent to someone else.`,
                });
            }

            await Notification.create({
                user: request.requester,
                book: request.book,
                request: request._id,
                message: `Your request to borrow "${book?.title || 'this book'}" was accepted!`,
            });
        } else {
            request.status = 'rejected';
            await request.save();

            const book = await Book.findById(request.book);
            await Notification.create({
                user: request.requester,
                book: request.book,
                request: request._id,
                message: `Your request to borrow "${book?.title || 'this book'}" was declined.`,
            });
        }

        notification.read = true;
        await notification.save();

        return res.status(200).json({ message: `Request ${action}ed successfully` });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error occurred, try again later" });
    }
});

module.exports = router;