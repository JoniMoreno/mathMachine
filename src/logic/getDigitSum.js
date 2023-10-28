const math = require('math');

const getDigitSum = (num) => {
    let sum = 0;
    while (num > 0) {
        sum = sum + num % 10;
        num = math.floor(num / 10)
    }
    return sum;
}

module.exports = { getDigitSum };