const express = require("express");
const router = express.Router();
const {Book} = require("../models/books");

router.post("/add-book" , async(req,res) => {
    try {
        await Book.create({
            title: req.body.title,
            owner: req.body.owner,
            borrower: req.body.borrower || null, // Optional, default to null if not provided
            exchangeRequest: {
              requestedBy: req.body.exchangeRequest?.requestedBy || null, // Optional, default to null
              requestedTo: req.body.exchangeRequest?.requestedTo || null,
              exchangeBookId: req.body.exchangeRequest?.exchangeBookId || null,
              status: req.body.exchangeRequest?.status || null
            },
            history: req.body.history || [], // Optional, default to an empty array
            author: req.body.author,
            genre: req.body.genre,
            available: req.body.available !== undefined ? req.body.available : true, // Default to true if not provided
            address: req.body.address,
            price: req.body.price || 0 // Optional, default to 0 if not provided
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/add-book" , (req,res) => {
    res.send("this is book page");
});

module.exports = router;