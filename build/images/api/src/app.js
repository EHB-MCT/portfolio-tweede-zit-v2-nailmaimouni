const express = require('express');
const knex = require('knex');
const bodyParser = require("body-parser");



const knexfile = require('./db/knexfile.js');

const db = knex(knexfile.development);


const app = express();


app.use(express.json());

require('./routes/courses.js')(app, db);


app.get('/', (req, res) => {
    res.send("API is running");
});


module.exports = app;