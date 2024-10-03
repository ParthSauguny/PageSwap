const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Assuming you have a User model
require('dotenv').config();

const authenticateUser = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token = req.cookies.refreshtoken;

    if (!token) {
      return res.status(401).json({ message: 'Authorization denied. No token provided.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET); // Or fetch the secret from DB if needed

    // Find the user from the decoded token data (user ID or email)
    const user = await User.findById(decoded.user._id); // Assuming the token contains user._id

    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
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
