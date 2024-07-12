const express = require("express");
const router = express.Router();
const {DonateBook , BorrowBook} = require("../models/books");

router.post("/borrow" , (req,res) => {
    const {} = req.body;
});

router.get("/exchange" , (req,res) => {
    res.send("this is take page");
});

router.post("/donate" , async(req,res) =>{
    const {title , genre} = req.body;
    await DonateBook.create({
        title,
        genre,
    });
    res.redirect("/" , {alert: "book added"});
});

module.exports = router;