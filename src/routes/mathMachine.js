const schemas = require('./schemas');
const handlers = require('./handlers');

const getIsPrime = app.get('/isPrime/:number', schemas.isPrimeSchema, handlers.isPrimeHandler);
const getDigitSum = app.get('/digitSum/:number', schemas.digitSumSchema, handlers.digitSumHandler);