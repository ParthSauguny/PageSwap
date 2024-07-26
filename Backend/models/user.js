const mongo = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("../.env").configure();

const userSchema = new mongo.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
} , {timestamps: true});

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password , 10);
    next();
});

userSchema.methods.isCorrectPassword = async function(password){
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = function(){
    jwt.sign({
        _id:this._id,
        username:this.username,
        email:this.email,
        password:this.password,
    } , process.env.ACCESS_TOKEN_SECRET , 
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)}
userSchema.methods.generateRefreshToken = function(){
    jwt.sign({
        _id:this._id
    } , process.env.REFRESH_TOKEN_SECRET , 
    {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
)}

const User = mongo.model("User" , userSchema);
module.exports = User;