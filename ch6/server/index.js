/**
 * @author Nicolás Tutor
 * Se creó una API RESTful usando Node, Express y MongoDB donde tenemos un conjunto de
 * compañías a las que pueden pertenecer cero o más usuarios.
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const cors = require('cors');

// DB
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("DB connected");
});

// APP
const app = express();

app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");
app.use(routes);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Express Server listenging on http:/${process.env.HOST}:${process.env.PORT}/`
  );
});
