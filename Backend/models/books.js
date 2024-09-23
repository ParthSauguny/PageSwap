const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title: {
        type:String,
        required:true,
    },
    owner: {
        type: String,
        required: true,
    },
    borrower: {
        type: String,
        default: null
    },
    exchangeRequest: {
        requestedBy: { type: String, default: null },
        requestedTo: { type: String, default: null },
        exchangeBookId: { type: String, default: null },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: null
        }
    },
    history: [
        {
          action: { type: String, enum: ["borrowed", "lent", "exchanged"] },
          userId: { type: String },
          date: { type: Date, default: Date.now }
        }
    ],
    author:{
        type: String,
        required: true,
    },
    genre: {
        type:String,
        required:true,
    },
    available: {
        type: Boolean,
        default: true
    },
    address: {
        type:String,
        required:true,
    },
    price: {
        type: Number
    }
} , {timestamps: true});

const Book = model("Book" , bookSchema);

module.exports = Book;