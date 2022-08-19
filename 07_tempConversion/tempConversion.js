const ftoc = function(temp) {
  let newTemp = 0;
  newTemp = Math.round(((temp - 32 ) * 5/9) * 10) / 10
  return newTemp
  
};

const ctof = function(temp) {
  let newTemp = 0;
  newTemp = Math.round(((temp * 9 ) / 5 + 32) * 10) / 10
  return newTemp

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
