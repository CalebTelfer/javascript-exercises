const reverseString = function(enteredString) {

    let reversedString = "";
    let stringLength = enteredString.length;

    for (let i = stringLength; i >= 0; --i) {
        console.log(i)
        reversedString += enteredString.charAt(i);
    }

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
