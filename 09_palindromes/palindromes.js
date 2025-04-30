const palindromes = function (inputString) {

    // A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks
    // So reversed strings need to = original string.
    // Should remove spaces, and punctation. Numbers should stay apparently.
    // Returns true OR false
    // Capitilization shouldn't matter.

    let parsedString, reversedString;

    parsedString = inputString;

    parsedString = parsedString.replaceAll(" ", "");
    parsedString = parsedString.replaceAll(".", "");
    parsedString = parsedString.replaceAll(",", "");
    parsedString = parsedString.replaceAll(";", "");
    parsedString = parsedString.replaceAll(":", "");
    parsedString = parsedString.replaceAll("'", "");
    parsedString = parsedString.replaceAll('"', "");
    parsedString = parsedString.replaceAll("!", "");
    parsedString = parsedString.replaceAll("?", "");

    // ^^^ removes most punctation. will be enough for project requirements

    reversedString = parsedString.split("").reverse().join("");

    if ( reversedString.toUpperCase() == parsedString.toUpperCase()) {
        return true;
    } else { 
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
