const express = require('express');
const knex = require('knex');
const bodyParser = require("body-parser");


const initEndpoints = require('./routes/courses.js');


const knexfile = require('./db/knexfile.js');

const db = knex(knexfile.development);


const app = express();


app.use(express.json());


app.get('/courses/:id', async (req, res) => {
    try {
        const course = await db('courses').where({
            id: req.params.id
        }).first();
        if (!course) {
            return res.status(404).json({
                message: 'Course not found'
            });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});


app.get('/', (req, res) => {
    res.send("API is running");
});


module.exports = app;