const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");

router.get("/signup" , (req,res) => {
    res.render("signup");
});


router.route("/signup").post(async(req,res) => {
    const {username , email , password} = req.body;

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required');
    }
    
    try {
        await usermodel.create({
            username,
            email,
            password
        })
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

module.exports = router;