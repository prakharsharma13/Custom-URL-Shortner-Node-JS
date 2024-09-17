const express = require("express");
const { connectToMongoDb } = require("./connect.js");
const urlRoute = require("./routes/url.js");

const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/shorturl").then(() =>
  console.log("MongoDb connected!")
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
