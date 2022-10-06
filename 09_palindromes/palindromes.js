const palindromes = function (str) {
    let strRegex = str.replace(/[.,\/#!$%\^&\*;:{}=\-_'~()]/g,""); // strips all punctuation with regex

    let strRegexWhiteSpace = strRegex.replace(/ /g,""); // removes multi word whitespace with regex

    let strRegexLowerCase = strRegexWhiteSpace.toLowerCase(); // upper case gone

    let splitString = strRegexLowerCase.split("");

    let reverseArray = splitString.reverse("");

    let reverseString = reverseArray.join("");

    if(strRegexLowerCase === reverseString) {
        return true;
    } else return false; 
};

// Do not edit below this line
module.exports = palindromes;
