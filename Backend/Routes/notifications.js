const express = require('express')
const router = express.Router();
const Book = require('../models/books');

router.get('/api/notifications', async (req, res) => {
    const userId = req.user._id;
    try {
        const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });
        res.json(notifications);
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/notifications/res' , async(req , res) => {
    const {notiResponse} = req.body;
})