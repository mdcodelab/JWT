require("dotenv").config();
const express = require("express");
const app = express();
require("express-async-errors");


app.use(express.json());
app.use(express.static("./public"));

const notfoundMiddleware=require("./middleware/not-found.js");
const errorHandlerMiddleware=require("./middleware/error-handler.js");


app.get("/", (req, res) => {
res.send("home page");
})

app.listen(5000, console.log("server is listening at port 5000"))
