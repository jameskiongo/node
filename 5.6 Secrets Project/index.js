// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
const API_URL = "https://secrets-api.appbrewery.com/random";

// 2. Create an express app and set the port number.

const app = express();
const port = 3000;
// 3. Use the public folder for static files.
app.use(express.static("public"));

app.get("/", async (req, res) => {
  // res.render("index.ejs", { secret: "secret", user: "user" });
  try {
    const response = await axios.get(API_URL);
    res.render("index.ejs", {
      secret: JSON.stringify(response.data.secret),
      user: JSON.stringify(response.data.username),
    });
  } catch (error) {
    res.render("index.ejs", { content: error });
  }
});

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
