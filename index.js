import express from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));

const API_URL = "https://secrets-api.appbrewery.com";

app.get("/", async (req, res) => {
  const result = await axios.get(API_URL + "/random");
  const secret = result.data.secret;
  const user = result.data.username;
  res.render("index.ejs", { secret: secret, user: user });
});

app.listen(3000, () => {
  console.log("Server is started");
});
