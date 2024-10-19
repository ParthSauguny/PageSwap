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
        borrower_id: { type: mongo.Schema.Types.ObjectId, ref: 'User', default: null },
        reqAddress: {
            type: String,
            required: true,
            default: null
        }
    },
    exchangeRequest: {
        requestedBy: { type: mongo.Schema.Types.ObjectId, ref: 'User', default: null },
        exchangeBookId: { type: String, default: null },
        status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending"
        },
        reqAddress:{
            type: String,
            required: true,
            default: null
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