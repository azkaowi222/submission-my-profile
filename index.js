const express = require("express");
const path = require("path");

const app = express();

const dirName = path.join(__dirname, "/src/views");

app.set("views", dirName);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8000, () => {
  console.log("Run at http://localhost:8000");
});
