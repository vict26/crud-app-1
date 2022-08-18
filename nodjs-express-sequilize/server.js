const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// db
const db = require("./app/models");
// For Production:
 db.sequelize.sync();
// For Develpment:
/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });*/
// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to CRUD app 1." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Node server is running on port ${PORT}.`);
});