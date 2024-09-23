const express = require("express");
const router = express.Router();
const {Book} = require("../models/books");

router.post("/add-book" , async(req,res) => {
    const {title , genre , address} = req.body;
    await ExchangeBook.create({
        title,
        genre,
        address,
    })
    res.redirect('/');
});

router.get("/exchange" , (req,res) => {
    res.send("this is take page");
});

router.get("/borrow" , (req,res) => {
    res.send("this is take page");
});

router.post("/borrow" , async(req,res) =>{
    const {title , genre , price , pickupAddress} = req.body;
    await BorrowBook.create({
        title,
        genre,
        price,
        pickupAddress,
    });
    res.redirect("/");
});

module.exports = router;