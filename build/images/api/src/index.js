const express = require('express');
const app = express();
const port = 3000;
const courseRoutes = require('./routes/app');

app.use(courseRoutes);

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});