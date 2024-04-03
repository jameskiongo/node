//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
var password = "";
const correctPassword = "iloveprogramming";
//
// function checkPassword(req, res, next) {
//   if (password === correctPassword) {
//     res.send("Incorrect");
//   } else {
//     res.send("correct");
//   }
//   next();
// }
//
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/check", (req, res) => {
  password = req.body["password"];
  if (password === correctPassword) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
