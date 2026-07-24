const express = require("express");
const mongo = require("mongoose");
const cookieParser = require('cookie-parser');
const bookRouter = require("./Routes/booksroutes");
const userRouter = require("./Routes/user.js");
const notificationRouter = require("./Routes/notifications.js");
const cors = require("cors");
require('dotenv').config();

const db_url = process.env.DB_URL;

// On Vercel, this module gets re-imported on cold starts and reused across
// warm invocations of the same instance — so calling connect() once here at
// module scope is the standard pattern, not a per-request connection.
mongo.connect(db_url)
    .then(() => console.log("connected to database"))
    .catch(error => console.log(error));

const app = express();

// FRONTEND_URL should be set to your deployed frontend's actual domain in
// production (e.g. https://pageswap.vercel.app). Falls back to the local
// Vite dev server for local development.
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/notification", notificationRouter);

app.get('/', (req, res) => {
    res.send("hello");
});

module.exports = app;