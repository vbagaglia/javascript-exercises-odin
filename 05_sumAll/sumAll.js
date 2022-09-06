const sumAll = function(num1, num2) {
    let error = "ERROR";
    let finalSum = 0;

    let biggerValue = Math.max(num1, num2); // will evaluate its contents and return the bigger one
    let smallerValue = Math.min(num1, num2); // returns the smaller from both values of said parameter

    if (((typeof num1 === "string")) || (typeof num2 === "string")) { // evaluate type of data
        return error;
    } else if (((typeof num1 === "object")) || (typeof num2 === "object")) { 
        return error;
    } else if ((biggerValue >= 0) && (smallerValue >= 0)) { // as long as both values are not negative, process the loop
            for (let i = smallerValue; i <= biggerValue; i++) { // i has to be equal to or less than...
                                  // incrementing by one each time
                finalSum = finalSum + i;
            }
    } else return error; // for negative numbers
        return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
