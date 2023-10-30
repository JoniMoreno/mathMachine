const isPrime = require('../logic/isPrime');

const isPrimeHandler = async (req, res) => {
    const num = req.params.number;
    await res.send(isPrime(num));
};

module.exports = isPrimeHandler;