const express = require("express");
const app = express();
const path = require("path");
const os = require('os')//operating system

const PORT = process.env.PORT || 3500;

app.get("^/$|/index/", (req, res) => {
  // this means I can get this site by eather calling the '/' itself or writing the rest of the request -> index in this case
  res.send("hi there form the server");
});
app.listen(PORT, () => console.log(`the port is running in port ${PORT}`));

//express require express  , define a port , path , listen to  the port and write a message that showes the port is running , get("/") and send response

app.get("/s", (req, res) => {
  res.send("hi from nowhere!");
});

app.get("/ss", (req, res) => {
  res.send("hi from nowhere nr2");
});

app.get("/fromhtml", (req, res) => {
  // by adding (.html)? to the path of the file -> that means the letters inside of te peranthases is <optional>, it means it's ok if I write it or not I still get the same result
  res.sendFile("./index(.html)?", { root: __dirname });
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // if there is no root map for the file  I wanna use so I can skip the root and write the file name direct
});

app.get("/*", (req, res) => {
  // /* means all other letters except those I wrote in get()
  res.status(404).send("404. Sorry, site not found");
});

app.get("/old-page", (req, res) => {
  // redirect from a site to anotehr site.
  res.redirect(301, "new-page"); // 302 by default , I must write 301 instead.
});




//middleware is everything between the request and the response
// I can use a dependency called for cors (cross origin resource sharing) to make my api like an oppen source -> app.use(cors())

const user = os.userInfo();
console.log(user);

console.log(`uptime is ${os.uptime()}`);

