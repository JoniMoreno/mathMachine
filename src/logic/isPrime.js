const math = require("math");

const isPrime = (num) => {
    for (let i = 2; i <= math.sqrt(num); i++) {
        if (num % i == 0) return false;
    }
    return true;
}

module.exports = { isPrime };