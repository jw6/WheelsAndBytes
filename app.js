const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const port = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("api/auth", function() {
  console.log(`server running`);
});

app.listen(port, function() {
  console.log(`Server is starting on port ${port}`);
})
