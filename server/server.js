const bodyParser = require("body-parser");
const postRouter = require("./src/routes/post.router");
const express = require("express");
var router = express.Router();
require("./src/database");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World ! ");
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/posts", postRouter);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
