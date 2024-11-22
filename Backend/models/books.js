const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    address: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
