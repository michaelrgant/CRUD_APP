const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

require("../server/db/index");
const app = express();

// request
app.use(morgan("dev"));
// body parsing middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// static files
app.use(express.static("public"));

// api routes
app.use("/api", require("./api"));


let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servering is running on http://localhost:${PORT}`);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error");
});
