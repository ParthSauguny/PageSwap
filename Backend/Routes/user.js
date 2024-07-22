const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");

router.get("/signup" , (req,res) => {
    res.render("signup");
});

router.post("/signup", async(req,res) => {
    const {username , email , password} = req.body;
    try {
        const newuser = new usermodel({
            username,
            email,
            password,
        });
        console.log("user is: ",newuser);
        user.save();
    } catch (error) {
        console.log("error" , error);
    }
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