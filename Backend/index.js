const express = require("express");
const mongo = require("mongoose");
const bookRouter = require("./Routes/booksroutes");
const userRouter = require("./Routes/user.js");

const PORT = process.env.PORT || 8000;

const app = express();
mongo.connect("mongodb://localhost:27017/PageSwap")
.then(() => console.log("connected to database"))
.catch(error=>console.log(error));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));
app.use("/user" , userRouter);
app.use("/book" , bookRouter);

app.get('/' , (req,res) => {
    res.send("hello");
});


app.listen(PORT , () => console.log("server started..."));