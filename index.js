const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/v1/users.route");
//middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/user", usersRoute);

//create root api
app.get("/", (req, res) => {
  res.send("users details home");
});
app.all("*", (req, res) => {
  res.send("No route found");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
