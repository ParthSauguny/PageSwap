const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const multer = require("multer");
const upload = multer({ dest: './uploads/cover-image' });
const auth = require('../middlewares/auth');
const uploadCloudinary = require('../utils/cloudinary');
const Request = require('../models/requests');
const Notification = require('../models/notificationSchema');
const { ObjectId } = require('mongoose').Types;

// Add a new book to the collection
router.post("/add-book", auth, upload.single('file'), async (req, res) => {
    const body = req.body;
    if(!req.file){
        return res.status(400).json({
            message: "Cover image required"
        });
    }
    
    try {
        // Upload image to Cloudinary
        const uploadResult = await uploadCloudinary(req.file.path);
        if(!uploadResult) return res.status(502).json({message: "couldn't upload cover image"});

        // Create the book entry
        await Book.create({
            title: body.title,
            owner: req.user._id,
            image_url: uploadResult.secure_url,
            author: body.author,
            genre: body.genre,
            available: body.available !== undefined ? body.available : true, // Default to true if not provided
            address: body.address,
            price: body.price || 0 // Default to 0 if not provided
        });

        return res.status(201).json({ message: "Book added successfully!" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

// Fetch all books
router.get("/show-books", async (req, res) => {
    try {
        const books = await Book.find().populate('owner', 'username').lean();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Unable to fetch books." });
    }
});


// Create a borrow request
router.post("/borrow-book", auth, async (req, res) => {
    const { book_id, address } = req.body;

    if (!book_id) {
        return res.status(400).json({ message: "book_id is required." });
    }

    try {
        const book = await Book.findById(book_id);
        if (!book) {
            return res.status(404).json({ message: "Book not found." });
        }

        // Prevent a user from requesting to borrow their own book
        if (book.owner.toString() === req.user._id.toString()) {
            return res.status(400).json({ message: "You can't borrow your own book." });
        }

        // Create the borrow request
        const request = await Request.create({
            requester: req.user._id,
            owner: book.owner,
            book: book._id,
            requesterAddress: address,
        });

        await Notification.create({
            user: book.owner,
            book: book._id,
            request: request._id,
            message: `${req.user.username} wants to borrow your book ${book.title}`,
        });

        return res.status(200).json({ message: "Borrow request created successfully!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error occurred while creating borrow request." });
    }
});

router.post("/return-book", auth, async (req, res) => {
    const { request_id } = req.body;
 
    try {
        const request = await Request.findById(request_id);
        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }
 
        if (request.status !== 'accepted') {
            return res.status(400).json({ message: `Cannot return a request with status "${request.status}"` });
        }
 
        const userId = req.user._id.toString();
        if (userId !== request.requester.toString() && userId !== request.owner.toString()) {
            return res.status(403).json({ message: "Not authorized to return this book" });
        }
 
        request.status = 'completed';
        await request.save();
 
        const book = await Book.findByIdAndUpdate(
            request.book,
            { available: true },
            { new: true }
        );
 
        // Notify whichever party didn't perform the return, not always the owner —
        // otherwise the owner gets a pointless notification about their own action.
        const recipient = userId === request.owner.toString() ? request.requester : request.owner;
 
        await Notification.create({
            user: recipient,
            book: request.book,
            request: request._id,
            message: `"${book?.title || 'The book'}" has been marked as returned.`,
        });
 
        return res.status(200).json({ message: "Book returned successfully!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error occurred while returning the book." });
    }
});

module.exports = router;