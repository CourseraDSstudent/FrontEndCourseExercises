const ftoc = function (fahrenheitToConvert) {
  celsius = (fahrenheitToConvert - 32) * (5 / 9);
  roundedCelsius = Math.round( celsius * 10) / 10;
  return roundedCelsius;
}

const ctof = function (celsiusToConvert) {
  fahrenheit = ( celsiusToConvert * (9/5) + 32 )
  roundedFahrenheit = Math.round( fahrenheit * 10 ) / 10;
  return roundedFahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
