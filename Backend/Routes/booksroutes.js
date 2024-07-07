const express = require("express");
const router = express.Router();
const bookmodel = require("../models/books");

router.get("/borrow" , (req,res) => {
    res.send("this is borrow page");
});

router.get("/exchange" , (req,res) => {
    res.send("this is take page");
});
