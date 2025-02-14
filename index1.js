import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userName = "";
app.use(bodyParser.urlencoded({ extended: true }));

function userNameGenerator(req, res, next) {
  console.log(req.body);
  userName = req.body["FirstName"] + req.body["LastName"];
  next();
}
app.use(userNameGenerator);
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>✌️ ${userName} ✌️ ✌️ </h2>`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
