const formettedTime = (time) => time.split(" ")[0];

const makeForbiddenTimeDiff = (time, diff) => {
  const [h, m] = formettedTime(time).split(":");
  let hour = parseInt(h);
  let min = parseInt(m);
  min = min + diff;
  if (min >= 60) {
    min = min % 60;
    hour += 1;
  } else if (min < 0) {
    min = 60 + min;
    hour -= 1;
  }
  let res = "";
  if (hour <= 9) {
    res += `0${hour}`;
  } else {
    res += `${hour}`;
  }
  res += ":";
  if (min <= 9) {
    res += `0${min}`;
  } else {
    res += `${min}`;
  }
  return res;
};

const manageTimings = (timings) => {
  return {
    fajr: formettedTime(timings.Fajr),
    sunrise: formettedTime(timings.Sunrise),
    forbiddenAfterFarj: makeForbiddenTimeDiff(timings.Sunrise, 20),
    forbiddenBeforeDhuhr: makeForbiddenTimeDiff(timings.Dhuhr, -20),
    dhuhr: formettedTime(timings.Dhuhr),
    asr: formettedTime(timings.Asr),
    forbiddenBeforeMaghrib: makeForbiddenTimeDiff(timings.Sunset, -20),
    sunset: formettedTime(timings.Sunset),
    maghrib: formettedTime(timings.Maghrib),
    isha: formettedTime(timings.Isha),
  };
};

const makeNamajObject = (data) => {
  let model = {};
  if (data) {
    const { timings, date, meta } = data;
    if (timings) model = { ...model, ...manageTimings(timings) };
  }
  return model;
};

const makeEasyModel = (data) => {
  const modifiedData = [];
  if (data && data.length > 0) {
    data.forEach((element) => {
      modifiedData.push(makeNamajObject(element));
    });
  }
  return modifiedData;
};

module.exports = {
  makeEasyModel,
};
