const express = require("express");
const { connectToMongoDb } = require("./connect.js");
const urlRoute = require("./routes/url.js");
const URL = require("./models/url.js");
const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://localhost:27017/shorturl").then(() =>
  console.log("MongoDb connected!")
);

app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
