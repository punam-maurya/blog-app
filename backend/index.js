const express = require("express");
const blogRouter = require("./router/blogRouter");
require("dotenv").config();
const dbConnection=require("./utility/db.js");
const cors=require("cors");

const app = express();

// CORS configuration


app.use(cors());
app.use(express.json());

// connecting to database
dbConnection(process.env.DB_URL);

app.use("/api/blog", blogRouter);
app.get("*", (req, res) => {
  res.send("Invalid Route");
});

app.listen(8000, () => {
  console.log("server is listening at 8000");
});
