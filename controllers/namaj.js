const request = require("request");

// Helper Functions
const {
  makeEasyMonthModel,
  makeEasyDayModel,
} = require("../utils/makeEasyNamajTimeModel");

/*
  params: latitude, Longitude, Method, School, date
*/

const getDayTimeByLatLon = (req, res, next) => {
  const lat = 23.777176;
  const lon = 90.399452;
  const day = parseInt(req.query.day);
  // const school = req.query.school;
  // const method = req.query.method;
  // const forbiddenTimeSafety = req.query.forbiddenTimeSafety;

  // school
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
          return res.status(200).json({
            messgage: "You have successfully fetched the data.",
            data: makeEasyDayModel(body.data, day),
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

/*
  params: latitude, Longitude, Method, School, date
*/

const getMonthTimeByLatLon = (req, res, next) => {
  const lat = 23.777176;
  const lon = 90.399452;

  // school
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
          return res.status(200).json({
            messgage: "You have successfully fetched the data.",
            data: makeEasyMonthModel(body.data),
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
  getMonthTimeByLatLon,
};
