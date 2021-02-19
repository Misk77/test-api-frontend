// ROOT index
/***
 * Req modules
 */ 
const express = require("express");
const path = require("path");


/***
 * App variable
 */
const app = express();
const port = process.env.PORT || "5000"


/***
 * App config
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public" )));



/***
 *  Routes definitions
 */
app.get("/", (req, res ) => {
  res.render("index",{ title: "indexROOT-Home" });
});
app.get("/Harry_Bot", (req, res) => {
  res.render("Harry_Bot", { title: "indexROOT-Harry-Bot", userProfile: { nickname: "indexROOT-Harry-Bot" } });
});
app.get("/create_profile", (req, res) => {
  res.render("create_profile", { title: "indexROOT-create_profile", userProfile: { nickname: "indexROOT-create_profile" } });
});
app.get("/Harry_personlized", (req, res) => {
  res.render("Harry_personlized", { title: "indexROOT-Harry_personlized", userProfile: { nickname: "indexROOT-Harry_personlized" } });
});
app.get("/Social_platform", (req, res) => {
  res.render("Social_platform", { title: "indexROOT-Social_platform", userProfile: { nickname: "indexROOT-Social_platform" } });
});
app.get("/Interactive_tutorial", (req, res) => {
  res.render("Interactive_tutorial", { title: "indexROOT-Interactive_tutorial", userProfile: { nickname: "indexROOT-Interactive_tutorial" } });
});

app.get("/user", (req, res) => {
  res.render("user", { title: "indexROOT-user", userProfile: { nickname: "indexROOT-user" } });
});

/***
 * Server activate
 */
app.listen(port,  () => {
  console.log(`Server is running on port: ${port}`);
});
