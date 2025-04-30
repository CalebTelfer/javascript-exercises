const fibonacci = function(n) {

// 0, 1, 1, 2, 3, 5, 8 <--- fibonacci example. two preceding numbers make the next number

if (n == 0) {   // first value of fibonacci is 0 so return 0 if its 0
    return 0;

} else if (n == 1) { // second value of fibonacci is 1 so return 1.
    return 1;

}

if (n < 0) { return "OOPS"};

return fibonacci(n-1) + fibonacci(n-2);

// ^ using the two known values of 0, and 1, to recursively work our way up to the fibonacci
// number that we requested when we originally called the function.

};

// Do not edit below this line
module.exports = fibonacci;
