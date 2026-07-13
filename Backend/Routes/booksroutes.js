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
        const upload = await uploadCloudinary(req.file.path);

        // Create the book entry
        await Book.create({
            title: body.title,
            owner: req.user._id,
            image_url: upload.secure_url,
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
    const { name , book_id , bookTitle, address, bookOwner } = req.body;
    console.log(bookTitle , req.user._id , bookOwner , address);

    try {
        console.log("try catch");
        // Create the borrow request
        const request = await Request.create({
            requester: req.user._id,
            owner: new ObjectId(bookOwner),
            book: new ObjectId(book_id),
            requesterAddress: address,
        });

        await Notification.create({
            user: new ObjectId(bookOwner),
            book: new ObjectId(book_id),
            request: request._id,
            message: `${name} wants to borrow your book ${bookTitle}`,
        });
        // Mark the book as unavailable after borrowing (optional)
        console.log("request paadi");
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

        await Notification.create({
            user: request.owner,
            book: request.book,
            request: request._id,
            message: `"${book?.title || 'Your book'}" has been marked as returned.`,
        });

        return res.status(200).json({ message: "Book returned successfully!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error occurred while returning the book." });
    }
});

module.exports = router;
