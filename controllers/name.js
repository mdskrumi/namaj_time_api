const Data = require("../data/AllahNames");
const benefitData = require("../data/AllahNameBenefit");

const getAsmaUlHusna = (req, res, next) => {
  return res.status(200).json({
    message: "Asma-Ul-Husna",
    data: Data,
    status_code: 200,
  });
};

const getAsmaUlHusnaBenefit = (req, res, next) => {
  return res.status(200).json({
    message: "Asma-Ul-Husna",
    data: benefitData,
    status_code: 200,
  });
};

module.exports = {
  getAsmaUlHusna,
  getAsmaUlHusnaBenefit,
};
