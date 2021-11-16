const express = require("express");

const config = require("./config");

const app = express();

app.listen(config.port, () =>
  console.log(`Application Started. Listening at port ${config.port}`)
);
