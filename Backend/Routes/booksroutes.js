const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const multer = require("multer");
const upload = multer({dest: './uploads/cover-image'});

router.post("/add-book" , upload.single('file') , async(req,res) => {
    console.log("starting process");
    const body = req.body;
    console.log(body);
    try {
        const res = await Book.create({
            title: body.title,
            owner: req.user._id,
            borrower: body.borrower || null, // Optional, default to null if not provided
            exchangeRequest: {
              requestedBy: body.exchangeRequest?.requestedBy || null, // Optional, default to null
              requestedTo: body.exchangeRequest?.requestedTo || null,
              exchangeBookId: body.exchangeRequest?.exchangeBookId || null,
              status: body.exchangeRequest?.status || null
            },
            author: body.author,
            genre: body.genre,
            available: body.available !== undefined ? req.body.available : true, // Default to true if not provided
            address: body.address,
            price: body.price // Optional, default to 0 if not provided
        });
        res.status(200).json({message: "added book"});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
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