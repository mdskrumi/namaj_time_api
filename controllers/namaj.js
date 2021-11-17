const request = require("request");

// Helper Functions
const { makeEasyModel } = require("../utils/makeEasyModel");

const getDayTimeByLatLon = (req, res, next) => {
  const lat = 23.777176;
  const lon = 90.399452;
  // &iso8601=true
  request(
    `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}`,
    { json: true },
    (err, _, body) => {
      if (err) {
        return res.status(500).json({
          messgage: "We are having some problem. Please try again later.",
          error: err,
          status: "fail",
          status_code: 500,
        });
      } else {
        if (body.code === 200) {
          makeEasyModel(body.data);
          return res.status(200).json({
            messgage: "You have successfully fetched the data.",
            data: body.data,
            status: "success",
            status_code: 200,
          });
        }
        return res.status(body.code).json({
          messgage: "We are having some problem. Please try again later.",
          error: body.data,
          status: body.status,
          status_code: body.code,
        });
      }
    }
  );
};

module.exports = {
  getDayTimeByLatLon,
};
