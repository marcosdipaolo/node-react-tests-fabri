import path from "path";
import express from 'express';
import router from "./router";
import morgan from 'morgan';
import headingResolver from "./utils/headingResolver";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(router);
const errorHandler = (err, rej, res, next) => {
  console.log(err);
  res.render("errors/500", headingResolver("error", err.message));
}
app.use(errorHandler);
app.listen(3000, () => {
  console.log("Server running at port 3000")
});