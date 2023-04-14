const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;

    let newArr = [...arr]
    for (let i = 0; i <= newArr.length; i++) {
      if (Array.isArray(newArr[i])) {
        newArr = newArr.flat()  //возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
        result += this.calculateDepth(newArr)
        return result
      }
    }
    return result
  }
}

module.exports = {
  DepthCalculator
};
