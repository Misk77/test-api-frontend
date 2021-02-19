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
app.get("/page1", (req, res) => {
  res.render("page1", { title: "indexROOT-page1", userProfile: { nickname: "indexROOT-page1" } });
});
app.get("/create_profile", (req, res) => {
  res.render("create_profile", { title: "indexROOT-create_profile", userProfile: { nickname: "indexROOT-create_profile" } });
});
app.get("/page2", (req, res) => {
  res.render("/page2", { title: "indexROOT-/page2", userProfile: { nickname: "indexROOT-/page2" } });
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
