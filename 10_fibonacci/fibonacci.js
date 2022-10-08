const fibonacci = function(fib) {
    let fibs = [1,1];
    let fibSum = 0;

    for(let i = 0; 0 < fib; i++) {
        fibSum = fibs.at(-1) + fibs.at(-2); // pointing to the exact index to use
        fibs.push(fibSum)
    }
    if (fib >= 0) {
        return fibs[fib-1];
    } else if (fib < o) {
        return "No.";
    }
};

// Do not edit below this line
module.exports = fibonacci;
