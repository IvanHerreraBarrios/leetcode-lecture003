/**
 * @param {number} num
 * @return {number}
 */
//let steps = 0
// for (; num != 0; steps++)
 //num = 0
 //steps = 6
 var numberOfSteps = function(num) {
    let steps = 0;
    while (num != 0) {
        num = num % 2 === 0 ? num / 2 : num - 1
        steps++
    }

    return steps
};