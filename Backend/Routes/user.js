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

router.route("/login").post(async(req,res) => {
    const {email , password} = req.body;
    if(!email || !password) {
        throw new Error("a field is missing");
    }
    try {

        const user = usermodel.findOne({email});
        if(!user){
            throw new Error("user not found");
        }

        const ispasswordvalid = await user.isCorrectPassword(password);
        if(!ispasswordvalid)
            throw new Error("invalid password");

        const accesstoken = user.generateAccessToken();
        const refreshtoken = user.generateRefreshToken();
        user.refreshtoken = refreshtoken;

        user.save({usermodel,validate:false});

        const options = {
            httpOnly:true,
            secure:true
        }
        return res.status(200).cookie("accesstoken" , accesstoken , options).cookie("refreshtoken" , refreshtoken , options);
    } 
    catch (error) {
        res.redirect("/login");
    }
}); 

router.get("/logout", (req, res) => {
    res.clearCookie("accessToken").clearCookie("refreshToken").redirect("/");
  });

module.exports = router;