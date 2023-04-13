const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let resultMessage = ''
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.getOwnPropertyNames(date).length !== 0 || isNaN(Date.parse(date)) && !(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  if (month === 11 || month <= 1) {
    resultMessage = 'winter'
  } else if (month <= 4) {
    resultMessage = 'spring'
  } else if (month <=7) {
    resultMessage = 'summer'
  } else if (month <= 11) {
    resultMessage = 'autumn'
  } else {
    throw new Error ('Invalid date!')
  }

  return resultMessage;

}

module.exports = {
  getSeason
};
