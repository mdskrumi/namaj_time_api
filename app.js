const express = require("express");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// Config Files
const config = require("./config");

// Route Files
const nameRoutes = require("./routes/name");
const namajRoutes = require("./routes/namaj");
const locationRoutes = require("./routes/location");

const app = express();

app.use(bodyParser.json());

app.use("/asma-ul-husna", nameRoutes);
app.use("/namaj", namajRoutes);
app.use("/location", locationRoutes);

app.use((req, res, next) => {
  return res.status(404).json({
    status_code: 404,
    message: "Invalid API",
  });
});

// mongoose
//   .connect(
//     "mongodb+srv://root:gottadiewithiman_315@namajtimeapi.ri4nn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   )
//   .then((result) => {
//     app.listen(config.port, () =>
//       console.log(`Application Started. Listening at port ${config.port}`)
//     );
//   })
//   .catch((err) => {
//     console.log("Database Error: ", err);
//   });

app.listen(config.port, () =>
  console.log(`Application Started. Listening at port ${config.port}`)
);
