const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assuming you have a User model
require('dotenv').config();

const authenticateUser = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies?.accesstoken || req.header("Authorisation")?.replace("Bearer" , "")

    if (!token) {
      return res.status(401).json({ message: 'Unauthorised request' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Find the user from the decoded token data (user ID or email)
    const user = await User.findById(decoded?._id).select("-password -refreshtoken") // token contains user._id

    if (!user) {
      return res.status(401).json({message: "not found user"});
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Token is not valid.' });
  }
};

module.exports = authenticateUser;
