const express = require("express");
const router = express.Router();
const {ExchangeBook , BorrowBook} = require("../models/books");

router.post("/exchange" , async(req,res) => {
    const {titleofYours , genreofYours , titleofYouWant , genreofYouWant , yourAddress} = req.body;
    await ExchangeBook.create({
        titleofYours,
        genreofYours,
        titleofYouWant,
        genreofYouWant,
        yourAddress,
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