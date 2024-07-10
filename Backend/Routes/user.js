const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");

router.get("/signup" , (req,res) => {
    res.render("signup");
});

router.post("/signup", async(req,res) => {
    const body = req.body;
    const userSaved = new usermodel(body);
    await userSaved.save();
    res.redirect("/");
});

router.get("/login" , (req,res) => {
    res.render("login");
});