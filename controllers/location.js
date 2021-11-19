const countries = require("../data/countries");
const cities = require("../data/cities");

const getCountries = (req, res, next) => {
  return res.status(200).json({
    status_code: 200,
    message: "Successful",
    data: countries,
  });
};

const getCitiesByCountryId = (req, res, next) => {
  const countryId = parseInt(req.query.countryId);
  const citiesByCountry = cities.filter(
    (city) => city.country_id === countryId
  );
  if (citiesByCountry && citiesByCountry.length > 0) {
    return res.status(200).json({
      status_code: 200,
      message: "Successful",
      data: citiesByCountry,
    });
  } else {
    return res.status(404).json({
      status_code: 404,
      message: "No City Found",
      data: [],
    });
  }
};

module.exports = {
  getCountries,
  getCitiesByCountryId,
};
