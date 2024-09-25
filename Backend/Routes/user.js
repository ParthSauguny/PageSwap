const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");
const User = require("../models/user");

router.route("/signup").post(async(req,res) => {
    const {username , email , password} = req.body;
    
    if (!username || !email || !password ) {
        return res.status(400);
    }

    const existingUser = await usermodel.findOne({ $or: [{ username }, { email }] });
    
    if (existingUser) {
      // If the username or email already exists, return a 400 response
      return res.status(400);
    }

    try {
        await usermodel.create({
            username,
            email,
            password
        })
        res.send({status: 200});
    } catch (error) {
        console.log("error" , error);
    }
});

router.route("/login").post(async(req,res) => {
    const {email , password} = req.body;
    if(!(email || password)) {
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
        res.redirect("/");
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("accessToken").clearCookie("refreshToken").redirect("/");
  });

module.exports = router;