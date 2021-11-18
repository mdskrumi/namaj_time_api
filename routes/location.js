const express = require("express");

// Controller
const {
  getCountries,
  getCitiesByCountryId,
} = require("../controllers/location");

const router = express.Router();

router.get("/countries", getCountries);
router.get("/cities", getCitiesByCountryId);

module.exports = router;
