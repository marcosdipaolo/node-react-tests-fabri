const path = require("path");
const express = require('express');
const app = express();
const router = require("./router");
const morgan = require('morgan');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(router);
app.listen(3000, () => {
  console.log("Server running at port 3000")
});