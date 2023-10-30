const math = require('math');

const getDigitSum = (num) => {
    let sum = 0, temp = num;
    while (temp > 0) {
        sum = sum + temp % 10;
        temp = math.floor(temp / 10);
    }
    return sum;
};

module.exports = getDigitSum;