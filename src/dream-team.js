const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arrMembers) {
  if (!Array.isArray(arrMembers)) {
    return false;
  }

  let result = [];

  for (let i = 0; i < arrMembers.length; i++) {
    if (typeof arrMembers[i] === 'string') {
      result.push(arrMembers[i].trim().charAt(0).toUpperCase())
      console.log(result)
    }
  }
  let dreamTeam = result.sort().join('')
  console.log(dreamTeam)
  return dreamTeam
}

module.exports = {
  createDreamTeam
};
