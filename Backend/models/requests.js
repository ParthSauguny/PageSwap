const {model , Schema} = require('mongoose');
const mongo = require('mongoose');

const request = new Schema({
    owner: {
        type: mongo.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    requester: {
        type: mongo.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
    book: {
        type: mongo.Schema.Types.ObjectId, ref: 'Book',
        required: true,
    },
    requestType: {
        type: String,
        enum: ["borrow" , "exchange"],
    },
    price:{
        type:Number,
        default: 0,
    },
    requestExchangedWithBook: {
        type: mongo.Schema.Types.ObjectId, ref: 'Book',
        default: null
    },
    requesterAddress: {
        type: String,
    }
} , {timestamps: true});

const Request = model('Request' , request);

module.exports = Request;