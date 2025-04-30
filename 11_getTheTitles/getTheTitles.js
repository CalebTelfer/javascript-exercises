const getTheTitles = function(bookArray) {

    //accepts an array of objects as input.

    const bookTitles = bookArray.map((book) => book.title);
    
    return bookTitles;

};

// Do not edit below this line
module.exports = getTheTitles;
