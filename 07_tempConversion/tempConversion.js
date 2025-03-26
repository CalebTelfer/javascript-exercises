const convertToCelsius = function(inputTemp) {
  // farenheit to celsius =  temp - 32 divided by 1.8
  const convertedTemp = (inputTemp - 32) / 1.8;
  return Math.round(convertedTemp * 10) / 10;

};

const convertToFahrenheit = function(inputTemp) {
  // celsius to farenheit = temp * 1.8 plus 32 after
  const convertedTemp = (inputTemp * 1.8) + 32;
  return Math.round(convertedTemp * 10) / 10;

};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
