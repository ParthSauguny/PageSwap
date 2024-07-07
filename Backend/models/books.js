const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    wannaDonate:{
        required:true,
        type:Boolean,
        default:false,
    },
    price:{
        type:Number,
        required:false,
    },
});

const Book = model("book" , bookSchema);
module.exports = Book;