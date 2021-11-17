const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Config Files
const config = require("./config");

// Route Files
const namajRoutes = require("./routes/namaj");

const app = express();

app.use(bodyParser.json());

app.use("/namaj", namajRoutes);

mongoose
  .connect(
    "mongodb+srv://root:gottaqdiewithiman_315@namajtimeapi.ri4nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(config.port, () =>
      console.log(`Application Started. Listening at port ${config.port}`)
    );
  })
  .catch((err) => {
    console.log("Database Error: ", err);
  });
