const express = require("express");

// Controller
const {
  getDayTimeByLatLon,
  getMonthTimeByLatLon,
} = require("../controllers/namaj");

const router = express.Router();

// get a days namaj time via lat lon
router.get("/day/time/lat-lon", getDayTimeByLatLon);

// get a months namaj time via lat lon
router.get("/month/time/lat-lon", getMonthTimeByLatLon);

module.exports = router;
