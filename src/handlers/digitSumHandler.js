const { string } = require('joi');
const digitSum = require('../logic/getDigitSum');

const digitSumHandler = async (req, res) => {
    const num = req.params.number;
    await res.send(String(digitSum(num)));
};

module.exports = digitSumHandler;