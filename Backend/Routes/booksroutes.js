const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const multer = require("multer");
const upload = multer({dest: './uploads/cover-image'});
const auth = require('../middlewares/auth');
const uploadCloudinary = require('../utils/cloudinary');

router.post("/add-book" , auth ,  upload.single('file') , async(req,res) => {
    const body = req.body;
    
    try {
        const upload = await uploadCloudinary(req.file.path);
        await Book.create({
            title: body.title,
            owner: req.user._id,
            image_url: upload.secure_url,
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
        return res.status(200).json({message: "added book"});
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.get("/show-books" , auth , async(req,res) => {
    try {
        const books = await Book.find().populate('owner', 'username');
        res.json(books);
    } catch (error) {
        res.status(500).json({message: "cannot fetch books"});
    }
});

router.post("/exchange-book" , auth , async(req,res) => {
    const {title , address , exchangeBook} = req.body;
    try {
        const book = await Book.findOne({title});
        book.exchangeRequest.exchangeBookId = exchangeBook;
        book.exchangeRequest.requestedBy = req.user._id;
        book.exchangeRequest.reqAddress = address;
        book.available = false;

        return res.status(200).json({message: "added request."});
    } catch (error) {
        console.log("error occurred" , error);
    }
});

router.post("/borrow-book" , auth , async(req,res) => {
    const {title , address} = req.body;
    try {
        const book = await Book.findOne({title});
        book.borrower.borrower_id = req.user._id;
        book.borrower.reqAddress = address;
        book.available = false;

        return res.status(200).json({message: "added request."});
    } catch (error) {
        console.log("error occurred" , error);
    }
});

module.exports = router;