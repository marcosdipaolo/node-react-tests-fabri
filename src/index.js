import path from "path";
import express from 'express';
import router from "./router";
import morgan from 'morgan';
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(router);
app.listen(3000, () => {
  console.log("Server running at port 3000")
});