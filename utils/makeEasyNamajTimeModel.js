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

const manageTimings = (timings, forbiddenTimeSafety) => {
  return {
    sahari: formettedTime(timings.Imsak),
    fajr: formettedTime(timings.Fajr),
    sunrise: formettedTime(timings.Sunrise),
    forbiddenAfterFarj: makeForbiddenTimeDiff(
      timings.Sunrise,
      forbiddenTimeSafety
    ),
    forbiddenBeforeDhuhr: makeForbiddenTimeDiff(
      timings.Dhuhr,
      -1 * forbiddenTimeSafety
    ),
    dhuhr: formettedTime(timings.Dhuhr),
    asr: formettedTime(timings.Asr),
    forbiddenBeforeMaghrib: makeForbiddenTimeDiff(
      timings.Sunset,
      -1 * forbiddenTimeSafety
    ),
    sunset: formettedTime(timings.Sunset),
    maghrib: formettedTime(timings.Maghrib),
    isha: formettedTime(timings.Isha),
  };
};

const manageDate = (date) => {
  return { timestamp: date.timestamp };
};

const manageMeta = (meta) => {
  return {
    method: meta.method.name,
    school: meta.school,
  };
};

const makeNamajObject = (data, forbiddenTimeSafety) => {
  let model = {};
  if (data) {
    const { timings, date, meta } = data;
    if (timings)
      model = { ...model, ...manageTimings(timings, forbiddenTimeSafety) };
    if (date) model = { ...model, ...manageDate(date) };
    if (meta) model = { ...model, ...manageMeta(meta) };
  }
  return model;
};

const makeEasyMonthModel = (data, forbiddenTimeSafety) => {
  const modifiedData = [];
  if (data && data.length > 0) {
    data.forEach((element) => {
      modifiedData.push(makeNamajObject(element, forbiddenTimeSafety));
    });
  }
  return modifiedData;
};

const makeEasyDayModel = (data, day, forbiddenTimeSafety) => {
  let modifiedData = {};
  if (data && data.length > 0) {
    data.forEach((element) => {
      if (day === parseInt(element.date.gregorian.day)) {
        modifiedData = makeNamajObject(element, forbiddenTimeSafety);
        return;
      }
    });
  }
  return modifiedData;
};

module.exports = {
  makeEasyMonthModel,
  makeEasyDayModel,
};
