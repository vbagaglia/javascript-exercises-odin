const leapYears = function(year) {
    let leapCheck;

    // if divisible by 100... false
    if (((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0)) {
        leapCheck = true; // if divisible by 4 AND 400... true
    } else {
        leapCheck = false;
    }
    return leapCheck;
};

// Do not edit below this line
module.exports = leapYears;
