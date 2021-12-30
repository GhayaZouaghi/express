const express = require("express");
const app = express();

const port = 5000;

// middleware
const verifyTime = require("./middleware/verifyTime");
app.use(verifyTime);

// route home page
app.get("/Home", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/Public/Home.html");
});

//  route contact page
app.get("/Contact", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/Public/Contact us.html");

  // route services page
  app.get("/services", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + "/Public/Our services.html");
  });
});

app.use(express.static(__dirname + "/public"));

app.listen(port, (error) => {
  error
    ? console.log("Connection failed!")
    : console.log(`Server is running on port ${port} ...`);
});
