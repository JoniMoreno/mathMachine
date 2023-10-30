const express = require('express');
const app = express();
const middleware = require('./middleware');
const {numberSchema} = require('./schemas/routeSchemas');
const digitSumHandler = require('./handlers/digitSumHandler');
const isPrimeHandler = require('./handlers/isPrimeHandler');
const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`This server is running at port ${PORT}`);
});

app.get('/healthcheck', (req, res) => {
    res.send("I'm alive and kicking");
});

app.get('/isPrime/:number', 
middleware(numberSchema, "params"),
 isPrimeHandler
 );
app.get('/digitSum/:number', 
middleware(numberSchema, "params"), 
digitSumHandler
);


