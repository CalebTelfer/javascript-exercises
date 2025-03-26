//leap years are divisible by 4, but years divisble by 100 are not leap years unless divisble by 400 aswell.

const leapYears = function(year) {
    if(year % 100 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
