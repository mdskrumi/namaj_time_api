const request = require("request");

const getDayTimeByLatLon = (req, res, next) => {
  const lat = 23.777176;
  const lon = 90.399452;

  request(
    `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${lon}`,
    { json: true },
    (err, _, body) => {
      if (err) {
        return res.json({
          messgage: "ALLAHU AKBAR",
          error: err,
        });
      } else {
        return res.json({
          messgage: "ALLAHU AKBAR",
          data: body.data,
        });
      }
    }
  );
};

module.exports = {
  getDayTimeByLatLon,
};
