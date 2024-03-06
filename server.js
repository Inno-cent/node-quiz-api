const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("database connected"));

app.listen(process.env.PORT || 2020, () => {
  console.log("The API is running...");
});
