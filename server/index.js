const express = require("express");
const morgan = require("morgan");

require("../server/db/index");
const app = express();

// request
app.use(morgan("dev"));
// body parsing middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", require("./api"));



let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servering is running on http://localhost:${PORT}`);
});
