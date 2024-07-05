const express = require("express");
const mongo = require("mongoose");

const PORT = process.env.PORT || 8000;

const app = express();
mongo.connect("mongodb://localhost:27017/PageSwap")
.then(() => console.log("connected to database"));

app.use(express.urlencoded({type: false}));


app.get('/' , (req,res) => {
    res.send("hello");
});

app.listen(PORT , () => console.log("server started..."));