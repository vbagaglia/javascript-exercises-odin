const isPalindrome = function (str) {
    let strRegex = str.replace(/[^a-z]/g, ""); // strips all punctuation with regex

    let finalStripPunc = strRegex.replace(/ /g, ""); // removes multi word whitespace with regex

    let finalString = finalStripPunc.toLowerCase;

    let splitStr = finalString.split("");

    let reverseArr = splitStr.reverse("");

    let finalReverseStr = reverseArr.join("");

    if(finalString === finalReverseStr) {
        return true;
    } else return false; 
};

// Do not edit below this line
module.exports = palindromes;
