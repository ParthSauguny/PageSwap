const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");

router.get("/signup" , (req,res) => {
    res.render("signup");
});
router.post("/signup",(req,res) => {
    usermodel.create({
        name: username,
        email:email,
        password:password,
    })
    res.redirect("/");
});

router.get("/login" , (req,res) => {
    res.render("login");
});