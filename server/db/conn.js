const mongoose = require("mongoose");
const database = process.env.DATABASE || "mongodb://localhost:27017/crud_app";
mongoose
  .connect(database, { useNewUrlParser: true })
  .then(() => {
    console.log("connection is setup sucessfully...");
  })
  .catch((error) => {
    console.log("connection not setup");
    console.log("error");
  });
