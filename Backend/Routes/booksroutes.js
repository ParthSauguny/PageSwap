const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const multer = require('multer');
const upload = multer({dest : 'uploads/'})

router.post("/add-book" , upload.single('image') , async(req,res) => {
    try {
        await Book.create({
            title: req.body.title,
            owner: req.user._id,
            borrower: req.body.borrower || null, // Optional, default to null if not provided
            exchangeRequest: {
              requestedBy: req.body.exchangeRequest?.requestedBy || null, // Optional, default to null
              requestedTo: req.body.exchangeRequest?.requestedTo || null,
              exchangeBookId: req.body.exchangeRequest?.exchangeBookId || null,
              status: req.body.exchangeRequest?.status || null
            },
            author: req.body.author,
            genre: req.body.genre,
            available: req.body.available !== undefined ? req.body.available : true, // Default to true if not provided
            address: req.body.address,
            price: req.body.price // Optional, default to 0 if not provided
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    res.send("added");
});

router.get("/show-books" , async(req,res) => {
    try {
        const books = await Book.find().populate('owner', 'username');
        res.json(books);
    } catch (error) {
        res.status(500);
    }
});

module.exports = router;