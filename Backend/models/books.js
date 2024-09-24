const mongo = require("mongoose");

const bookSchema = new mongo.Schema({
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
          action: { type: String, enum: ["borrowed", "lent", "exchanged"], default: null},
          userId: { type: String, default: null},
          date: { type: Date, default: null}
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
        type: Number,
        default: 0
    }
} , {timestamps: true});

const Book = mongo.model("Book" , bookSchema);

module.exports = Book;