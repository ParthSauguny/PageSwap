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
            // If the username or email already exists, return a 409(conflict) response with a message
            return res.status(409).json({ error: "Username or email already exists." });
        }

        // Create a new user
        const newUser = await usermodel.create({
            username,
            email,
            password
        });

        const createdUser =
            await usermodel.findById(newUser._id).select("-password -refreshtoken");

        // Send success response
        return res.status(201).json({ message: "User created successfully", user: createdUser });
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

router.get("/profile", auth, async (req, res) => {
    const userId = req.user._id;
 
    try {
        const [user, ownedBooks, lentRequests, borrowedRequests] = await Promise.all([
            usermodel.findById(userId).select("-password -refreshtoken"),
            Book.find({ owner: userId }).sort({ createdAt: -1 }),
            Request.find({ owner: userId, status: { $in: ["accepted", "completed"] } })
                .populate("book", "title author image_url")
                .populate("requester", "username")
                .sort({ createdAt: -1 }),
            Request.find({ requester: userId, status: { $in: ["accepted", "completed"] } })
                .populate("book", "title author image_url")
                .populate("owner", "username")
                .sort({ createdAt: -1 }),
        ]);
 
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
 
        const formatLentEntry = (r) => ({
            requestId: r._id,
            status: r.status,
            book: r.book ? {
                id: r.book._id,
                title: r.book.title,
                author: r.book.author,
                image_url: r.book.image_url,
            } : null,
            borrower: r.requester ? {
                id: r.requester._id,
                username: r.requester.username,
            } : null,
            requestedAt: r.createdAt,
            updatedAt: r.updatedAt,
        });
 
        const formatBorrowedEntry = (r) => ({
            requestId: r._id,
            status: r.status,
            book: r.book ? {
                id: r.book._id,
                title: r.book.title,
                author: r.book.author,
                image_url: r.book.image_url,
            } : null,
            owner: r.owner ? {
                id: r.owner._id,
                username: r.owner.username,
            } : null,
            requestedAt: r.createdAt,
            updatedAt: r.updatedAt,
        });
 
        const lendingActive = lentRequests.filter(r => r.status === "accepted").map(formatLentEntry);
        const lendingHistory = lentRequests.filter(r => r.status === "completed").map(formatLentEntry);
        const borrowingActive = borrowedRequests.filter(r => r.status === "accepted").map(formatBorrowedEntry);
        const borrowingHistory = borrowedRequests.filter(r => r.status === "completed").map(formatBorrowedEntry);
 
        return res.status(200).json({
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                memberSince: user.createdAt,
            },
            stats: {
                booksOwned: ownedBooks.length,
                currentlyLentOut: lendingActive.length,
                currentlyBorrowing: borrowingActive.length,
                totalTimesLent: lendingHistory.length,
                totalTimesBorrowed: borrowingHistory.length,
            },
            booksOwned: ownedBooks.map(b => ({
                id: b._id,
                title: b.title,
                author: b.author,
                genre: b.genre,
                image_url: b.image_url,
                available: b.available,
                price: b.price,
            })),
            lending: {
                active: lendingActive,
                history: lendingHistory,
            },
            borrowing: {
                active: borrowingActive,
                history: borrowingHistory,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error fetching profile." });
    }
});

router.get("/logout", auth, async (req, res) => {
    try {
        await usermodel.findByIdAndUpdate(req.user._id, {
            $unset: { refreshtoken: 1 }
        });
        res.clearCookie("accesstoken").clearCookie("refreshtoken");
        return res.status(200).json({ message: "logged out!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred during logout." });
    }
});

module.exports = router;