const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    requester: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    book: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book',
        required: true,
    },
    requesterAddress: {
        type: String,
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "completed"],
        default: "pending",
    },
    price: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;
