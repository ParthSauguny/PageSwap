const express = require("express");
const router = express.Router();
const mult = require("multer");
const upload = mult({ dest: './uploads/' })
const {DonateBook , BorrowBook} = require("../models/books");

router.post("/borrow" , (req,res) => {
    const {} = req.body;
});

router.get("/exchange" , (req,res) => {
    res.send("this is take page");
});

router.post("/donate" , upload.single("book_file") , async(req,res) =>{
    const {title , genre} = req.body;
    await DonateBook.create({
        title,
        genre,
    });
    res.redirect("/" , {alert: "book added"});
});

module.exports = router;