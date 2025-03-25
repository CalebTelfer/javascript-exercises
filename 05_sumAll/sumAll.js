const sumAll = function(numOne, numTwo) {
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) {
        return "ERROR";
    }

    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    //prevents numbers w decimals
    if (numOne % 1 != 0 || numTwo % 1 != 0) {
        return "ERROR";
    }

    let lowNum, highNum = 0;

    if (numOne < numTwo) {
        lowNum = numOne;
        highNum = numTwo;
    } else {
        lowNum = numTwo;
        highNum = numOne;
    }

    let sum = 0;
    for (let i = lowNum; i <= highNum; i++) {
        sum = sum + i;
        console.log(sum);
    }

    return sum;


};

// Do not edit below this line
module.exports = sumAll;
