const express = require("express");
const mongo = require("mongoose");
const bookRouter = require("./Routes/booksroutes");
const userRouter = require("./Routes/user");

const PORT = process.env.PORT || 8000;

const app = express();
mongo.connect("mongodb://localhost:27017/PageSwap")
.then(() => console.log("connected to database"))
.catch((e)=>console.log(e));

app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

app.route("/user" , userRouter);
app.route("/book" , bookRouter);

app.get('/' , (req,res) => {
    res.send("hello");
});

app.listen(PORT , () => console.log("server started..."));