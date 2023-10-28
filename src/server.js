const express = require('express');
const app = express();
const PORT = 3000; 

app.listen(PORT, () => {
    console.log(`This server is running at port ${PORT}`);
});

app.get('/isPrime/:number', isPrimeSchema, isPrimeHandler);