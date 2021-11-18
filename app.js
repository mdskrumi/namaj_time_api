const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cities = require("./data/cities.json");
const countries = require("./data/countries.json");
const city = require("./data/city");

// Config Files
const config = require("./config");

// Route Files
const namajRoutes = require("./routes/namaj");

const app = express();

app.use(bodyParser.json());

app.use("/namaj", namajRoutes);

app.get("/cities", (req, res, next) => {
  console.log(city)
  return res.json(
    city.filter((c) => c.country_id === 19)
  );
});

app.get("/countries", (req, res, next) => {
  return res.json(countries);
});

mongoose
  .connect(
    "mongodb+srv://root:gottadiewithiman_315@namajtimeapi.ri4nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(config.port, () =>
      console.log(`Application Started. Listening at port ${config.port}`)
    );
  })
  .catch((err) => {
    console.log("Database Error: ", err);
  });
