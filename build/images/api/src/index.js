const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my custom API!');
});

app.get('/api/v1/resource', (req, res) => {
    res.json({
        message: 'This is a GET request'
    });
});

app.post('/api/v1/resource', (req, res) => {
    const data = req.body;
    res.status(201).json({
        message: 'Resource created',
        data
    });
});

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});