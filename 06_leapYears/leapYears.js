const leapYears = function(yearInput) {
    let leapCheck;

    // if divisible by 100... false
    if (((yearInput % 4 === 0) && (yearInput % 100 != 0)) || (yearInput % 400 === 0)) {
        leapCheck = true; // if divisible by 4 AND 400... true
    } else {
        leapCheck = false;
    }
    return leapCheck;
};

// Do not edit below this line
module.exports = leapYears;
