// creating port to make requests to DB
require("dotenv").config();
const express = require("express");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const allRoutes = require("./controllers");

app.use(allRoutes);

sequelize.sync({force:false}).then(() => {
 app.listen(PORT, () => console.log("Connected and Listening for Requests!"));
});
