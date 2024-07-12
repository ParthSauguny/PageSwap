const { Schema, model } = require("mongoose");

const donatebookSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
} , {timestamps: true});
const DonateBook = model("donatebook" , donatebookSchema);

const bookforborrow = new Schema({
    title:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
} , {timestamps: true});
const BorrowBook = model("bookforborrow" , bookforborrow);

const BookforExchange = new Schema({
    titleofYours:{
        type:String,
        required:true,
    },
    genreofYours:{
        type:String,
        required:true,
    },
    titleofYouWant:{
        type:String,
        required:true,
    },
    genreofYouWant:{
        type:String,
        required:true,
    },
});
const ExchangeBook = model("bookforexchange" , BookforExchange);

module.exports = [
    DonateBook,
    BorrowBook,
    ExchangeBook,
];