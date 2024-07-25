const { Schema, model } = require("mongoose");

const donatebookSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    }
} , {timestamps: true});
const DonateBook = model("DonateBook" , donatebookSchema);

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
const BorrowBook = model("BorrowBook" , bookforborrow);

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
const ExchangeBook = model("ExchangeBook" , BookforExchange);

module.exports = [
    DonateBook,
    BorrowBook,
    ExchangeBook,
];