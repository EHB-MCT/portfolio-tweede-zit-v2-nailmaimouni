// __tests__/courses.test.js

const request = require('supertest');
const express = require('express');
const knex = require('knex');
const knexConfig = require('../src/db/knexfile');
const app = express();

// Set up Knex and the Express app
const db = knex(knexConfig.development);
app.use(express.json());

// Import the routes from your app
const courseRoutes = require('../src/routes/app');
app.use(courseRoutes);

beforeAll(async () => {
    // Run the migrations to ensure the database schema is up to date
    await db.migrate.latest();

    // Seed the database with a known state
    await db('courses').del(); // Clear existing data
    await db('courses').insert([
        { id: 1, course_name: 'Web Development', description: 'Learn to build web applications', instructor: 'John Doe', credits: 3 },
        { id: 2, course_name: 'Graphic Design', description: 'Introduction to graphic design', instructor: 'Jane Smith', credits: 4 },
        { id: 3, course_name: 'Digital Marketing', description: 'Basics of digital marketing', instructor: 'Alice Johnson', credits: 2 }
    ]);
});

afterAll(async () => {
    // Clean up the database after tests
    await db('courses').del();
    await db.destroy();
});

describe('GET /api/v1/courses/:id', () => {
    it('should return the correct course by ID', async () => {
        const response = await request(app).get('/api/v1/courses/1');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            id: 1,
            course_name: 'Web Development',
            description: 'Learn to build web applications',
            instructor: 'John Doe',
            credits: 3
        });
    });

    it('should return 404 if the course is not found', async () => {
        const response = await request(app).get('/api/v1/courses/999');

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Course not found');
    });
});
