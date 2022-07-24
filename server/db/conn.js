const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/crud_app", { useNewUrlParser: true })
  .then(() => {
    console.log("connection is setup sucessfully...");
  })
  .catch((error) => {
    console.log("connection not setup");
    console.log("error");
  });

