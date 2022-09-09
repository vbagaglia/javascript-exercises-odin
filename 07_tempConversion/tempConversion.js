const ftoc = function(farenheitNum) {
  let celsiusConversion = (farenheitNum - 32) * (5/9);
  let celsiusRounded = Math.round(celsiusConversion * 10) / 10;

  return celsiusRounded
};

const ctof = function(celsiusNum) {
  let farenheitConversion = (celsiusNum * (9/5) + 32);
  let farenheitRounded = Math.round(farenheitConversion * 10) / 10;

  return farenheitRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
