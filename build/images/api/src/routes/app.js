const {
    checkCoursesName
} = require("./../helpers/endpointHelpers.js")

const express = require('express');
const {
    Pool
} = require('pg');
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
router.get('/api/v1/courses', async (req, res) => {
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
router.get('/api/v1/courses/:id', async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const result = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Course not found'
            });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// Create a new course
router.post('/api/v1/courses', async (req, res) => {
    const {
        course_name,
        description,
        instructor,
        credits
    } = req.body;
    if (checkCoursesName(student.name)) {


        try {
            const result = await pool.query(
                'INSERT INTO courses (course_name, description, instructor, credits) VALUES ($1, $2, $3, $4) RETURNING *',
                [course_name, description, instructor, credits]
            );
            res.status(201).json({
                message: 'Course created',
                data: result.rows[0]
            });
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    } else {
        res.status(401).send({
            message: "name not formatted correctly"
        })
    }
});

// Update an existing course
router.put('/api/v1/courses/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const {
        course_name,
        description,
        instructor,
        credits
    } = req.body;
    try {
        const result = await pool.query(
            'UPDATE courses SET course_name = $1, description = $2, instructor = $3, credits = $4 WHERE id = $5 RETURNING *',
            [course_name, description, instructor, credits, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Course not found'
            });
        }
        res.json({
            message: 'Course updated',
            data: result.rows[0]
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

// Delete a course
router.delete('/api/v1/courses/:id', async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const result = await pool.query('DELETE FROM courses WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Course not found'
            });
        }
        res.json({
            message: 'Course deleted',
            data: result.rows[0]
        });
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;