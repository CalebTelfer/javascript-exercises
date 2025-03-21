const removeFromArray = function(array, ...theArgs) {
    return array.filter(val => !theArgs.includes(val))
};
// Do not edit below this line
module.exports = removeFromArray;
