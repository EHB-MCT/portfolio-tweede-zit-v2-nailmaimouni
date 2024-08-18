const request = require('supertest');
const app = require('./../../app.js')
const knexfile = require('../../db/knexfile.js');
const db = require("knex")(knexfile.development);




describe('GET /courses/:id', () => {

    beforeAll(async () => {
        await db('courses').truncate();
        await db.migrate.latest(); // Run migrations
        await db.seed.run();
        //await db.raw('BEGIN');
    });

    afterAll(async () => {
        await db.destroy();
    });

    test('should return the correct course record for id = 1', async () => {
        const courseId = 1; // Using id from your seed data
        const response = await request(app).get(`/courses/${courseId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', courseId);
    });

    test('should return 404 for non-existent course', async () => {
        const nonExistentCourseId = 999;
        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(404);
    });

    test('should return 401 for negative courseID', async () => {
        const nonExistentCourseId = -12;
        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(401);
    });



});