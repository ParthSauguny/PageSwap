const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");

router.get("/signup" , (req,res) => {
    res.render("signup");
});

router.post("/signup", async(req,res) => {
    const {username , email , password} = req.body;
    await usermodel.create({
        username,
        email,
        password,
    })
    res.redirect("/");
});

router.get("/login" , (req,res) => {
    res.render("login");
});

router.post("/login" , (req,res) => {
    try {
        const {email , password} = req.body;
    } catch (error) {
        res.redirect("login" , {error:"incorrect email or password"});
    }
});