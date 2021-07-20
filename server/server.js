const bodyParser = require("body-parser");
const ridesRouter = require("./src/routes/rides.router");
const express = require("express");
var router = express.Router();
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

app.use("/rides", ridesRouter);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
});
