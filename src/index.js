require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json("Api está Ok!");
});

//const port = process.env.PORT || 3000;

app.listen(process.env.PORT);
