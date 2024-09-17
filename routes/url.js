const express = require("express");
const { handleGenerateShortURL } = require("../controllers/url.js");

const router = express.Router();

router.post("/", handleGenerateShortURL);

module.exports = router;
