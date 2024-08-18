const {
    checkCoursesName
} = require("./../helpers/endpointHelpers.js")

const express = require('express');
const {
    Pool
} = require('pg');
const app = require("../app.js");
require('dotenv').config();

const router = express.Router();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the Multimedia & Creative Technologies Courses API!');
});

// Get all courses
router.get('/courses', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// Get a single course by ID
function courseByIdRoute(app, db) {
    app.get('/courses/:id', async (req, res) => {
        const id = parseInt(req.params.id, 10); 

        if (isNaN(id) || id < 0) { 
            return res.status(401).json({
                error: 'negative id provided'
            });
        }

        if (id > 9999) {
            return res.status(401).json({
                error: 'id too large'
            });
        }

        try {
            const course = await db('courses').where({
                id
            }).first(); 
            if (course) {
                res.json(course);
            } else {
                res.status(404).json({
                    error: 'Course not found'
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'error has occurred fetching the courses.'
            });
        }
    });
}


// Create a new course
function courseAddRoute(app, db) {
    app.post("/courses", async (req, res) => {
        const course = req.body;

        
        if (checkCoursesName(course.course_name)) {
            try {
                const result = await db('courses')
                    .insert({
                        course_name: course.course_name,
                        description: course.description,
                        instructor: course.instructor,
                        credits: course.credits
                    })
                    .returning("*");

                res.status(201).json({
                    message: 'Course created',
                    data: result[0]
                });
            } catch (err) {
                console.error('Error during course creation:', err);
                res.status(500).json({
                    error: err.message
                });
            }
        } else {
            res.status(401).send({
                message: "Course name not formatted correctly"
            });
        }
    });
}



// Delete a course
function courseDeleteRoute(app, db) {
    app.delete('/courses/:id', async (req, res) => {
        const {
            id
        } = req.params;

        try {
            const result = await db('courses')
                .where({
                    id
                })
                .del()
                .returning("*");

            if (result.length === 0) {
                return res.status(404).json({
                    message: 'Course not found'
                });
            }

            res.json({
                message: 'Course deleted',
                data: result[0]
            });
        } catch (err) {
            console.error('Error during course deletion:', err);
            res.status(500).json({
                error: err.message
            });
        }
    });
}

module.exports = (app, db) => {
    courseByIdRoute(app, db);
    courseAddRoute(app, db);
    courseDeleteRoute(app, db);
    app.use('/', router);
};