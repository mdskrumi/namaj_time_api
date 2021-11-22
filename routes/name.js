const express = require("express");

// Controller
const {
  getAsmaUlHusna,
  getAsmaUlHusnaBenefit,
} = require("../controllers/name");

const router = express.Router();

router.get("/", getAsmaUlHusna);
router.get("/benefit", getAsmaUlHusnaBenefit);

module.exports = router;
