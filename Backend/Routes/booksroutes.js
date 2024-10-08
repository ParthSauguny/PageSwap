const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const multer = require("multer");
const upload = multer({dest: './uploads/cover-image'});
const auth = require('../middlewares/auth');
const uploadCloudinary = require('../utils/cloudinary');

router.post("/add-book" , auth ,  upload.single('file') , async(req,res) => {
    const body = req.body;
    console.log(req.file);
    
    try {
        await Book.create({
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
        uploadCloudinary(req.file.path);
        return res.status(200).json({message: "added book"});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.get("/show-books" , async(req,res) => {
    try {
        const books = await Book.find().populate('owner', 'username');
        res.json(books);
    } catch (error) {
        res.status(500).json({message: "cannot fetch books"});
    }
});

module.exports = router;