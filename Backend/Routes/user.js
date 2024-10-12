const express = require("express");
const router = express.Router();
const usermodel = require("../models/user");

router.route("/signup").post(async (req, res) => {
    const { username, email, password } = req.body;

    // all required fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ error: "Please fill all the required fields." });
    }

    try {
        // Check if the user already exists by username or email
        const existingUser = await usermodel.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            // If the username or email already exists, return a 401 response with a message
            return res.status(401).json({ error: "Username or email already exists." });
        }

        // Create a new user
        const newUser = await usermodel.create({
            username,
            email,
            password
        });

        // Send success response
        return res.status(200).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        // Catch and log any errors that occur
        console.error("Error during signup:", error);
        // Send a 500 internal server error response with error details
        return res.status(500).json({ error: "An error occurred during signup. Please try again later." });
    }
});

router.route("/login").post(async(req,res) => {
    const {email , password} = req.body;
    if(!email || !password) {
        return res.status(400).json({ error: "Please fill all the required fields." });
    }
    
    try {
        const user = await usermodel.findOne({email});
        if(!user){
            return res.status(401).json({ error:"Invalid Credentials." });
        }
        
        const ispasswordvalid = await user.isCorrectPassword(password);
        if(!ispasswordvalid){
            return res.status(401).json({ error: "Invalid Credentials." });
        }
        
        const accesstoken = await user.generateAccessToken();
        const refreshtoken = await user.generateRefreshToken();
        user.refreshtoken = refreshtoken;

        await user.save({ validateBeforeSave: false });

        const options = {
            httpOnly:true,
            secure:true
        }
        
        return res.status(200).cookie("accesstoken" , accesstoken , options).cookie("refreshtoken" , refreshtoken , options).json({ message: "Login successful" });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred during login. Please try again later." });
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("accessToken").clearCookie("refreshToken");
    res.status(200).json({message: "logged out!"});
  });

module.exports = router;