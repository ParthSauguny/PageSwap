const express = require('express')
const router = express.Router();
const Book = require('../models/books');
const Request = require('../models/requests');

router.get('/api/notifications', async (req, res) => {
    const userId = req.user._id;
    try {
        const notifications = await Notification.find({ user: userId }).sort({ createdAt: -1 });
        res.json(notifications);
    } catch (error) {
        console.log(error);
    }
});

router.post('/api/notireply' , async(req , res) => {
    const {notiRes} = req.body;
    const noti_id = notiRes._id;
    const book_id = notiRes.bookId;
    const noti_msg = notiRes.message;

    try {
        if(noti_msg === "accept"){
            Book.findByIdAndUpdate(book_id , {
                available: false
            })
        }else{

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "try again later"});
    }
})

module.exports = router;