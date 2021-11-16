const express = require("express");
const bodyParser = require("body-parser");

// Config Files
const config = require("./config");

// Route Files
const namajRoutes = require("./routes/namaj");

const app = express();

app.use(bodyParser.json());

app.use("/namaj", namajRoutes);

app.listen(config.port, () =>
  console.log(`Application Started. Listening at port ${config.port}`)
);
