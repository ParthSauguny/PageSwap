const mongo = require("mongoose");

const bookSchema = new mongo.Schema({
    title: {
        type:String,
        required:true,
    },
    owner: {
        type: mongo.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    image_url:{
        type: String,
        required: true
    },
    borrower: {
        type: String,
        default: null
    },
    exchangeRequest: {
        requestedBy: { type: String, default: null },
        exchangeBookId: { type: String, default: null },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending"
        }
    },
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