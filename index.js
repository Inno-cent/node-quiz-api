const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes"); // includes the routes.js file
const cors = require("cors"); // includes cors module
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("database connected"));

const port = process.env.PORT || 2020
app.listen(port, () => {
  console.log(`The API is running onn ${port}...`);
});
