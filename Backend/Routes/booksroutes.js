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

        return res.status(200).json({ message: "Book added successfully!" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

// Fetch all books
router.get("/show-books", auth, async (req, res) => {
    try {
        const books = await Book.find().populate('owner', 'username');
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Unable to fetch books." });
    }
});

// Create an exchange request
router.post("/exchange-book", auth, async (req, res) => {
    const { book_id , bookTitle, exchangeBookId, address, bookOwner } = req.body;

    try {
        // Create the exchange request
        await Request.create({
            requester: req.user._id,
            owner: new ObjectId(bookOwner),
            requestType: "exchange",
            book: new ObjectId(book_id),
            requesterAddress: address,
            requestExchangedWithBook: exchangeBookId,
        });

        await Notification.create({
            user: userId,
            message,
        });

        // Mark the books as unavailable after request creation (optional)
        await Book.updateMany({ title: { $in: [bookTitle, exchangeBookId] } }, { available: false });

        return res.status(200).json({ message: "Exchange request created successfully!" });
    } catch (error) {
        return res.status(500).json({ message: "Error occurred while creating exchange request." });
    }
});

// Create a borrow request
router.post("/borrow-book", auth, async (req, res) => {
    const { book_id , bookTitle, address, bookOwner } = req.body;
    console.log(bookTitle , req.user._id , bookOwner , address);

    try {
        console.log("try catch");
        // Create the borrow request
        await Request.create({
            requester: req.user._id,
            owner: new ObjectId(bookOwner),
            requestType: "borrow",
            book: new ObjectId(book_id),
            requesterAddress: address,
        });
        console.log("try catch chal rha");
        // Mark the book as unavailable after borrowing (optional)
        await Book.updateOne({ title: bookTitle }, { available: false });
        console.log("request paadi");
        return res.status(200).json({ message: "Borrow request created successfully!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error occurred while creating borrow request." });
    }
});

module.exports = router;
