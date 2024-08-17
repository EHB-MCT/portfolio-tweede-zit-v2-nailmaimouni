const express = require('express');
const knex = require('knex');



const initEndpoints = require('./routes/courses.js');


const knexfile = require('./db/knexfile.js');

const db = knex(knexfile.development);


const app = express();


app.use(express.json());


initEndpoints(app, db);


app.get('/', (req, res) => {
    res.send("API is running");
});


module.exports = app;