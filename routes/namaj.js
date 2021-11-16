const express = require("express");

// Controller
const { getDayTimeByLatLon } = require("../controllers/namaj");

const router = express.Router();

// get a single day namaj time via lat lon

router.get("/day/time/lat-lon", getDayTimeByLatLon);

module.exports = router;
