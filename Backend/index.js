const express = require("express");
const mongo = require("mongoose");
const bookRouter = require("./Routes/booksroutes");
const userRouter = require("./Routes/user.js");
//const cors = require("cors");

const PORT = process.env.PORT || 8000;
const db_url = process.env.DB_URL;

const app = express();

mongo.connect(db_url)
.then(() => console.log("connected to database"))
.catch(error=>console.log(error));

// app.use(cors);
// const corsOptions = {
//     origin: "http://localhost:5173",
//     methods: "GET , POST , PUT",
//     Credentials: true,
// }
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/user" , userRouter);
app.use("/book" , bookRouter);

app.get('/' , (req,res) => {
    res.send("hello");
});

app.listen(PORT , () => console.log("server started at port" , PORT));