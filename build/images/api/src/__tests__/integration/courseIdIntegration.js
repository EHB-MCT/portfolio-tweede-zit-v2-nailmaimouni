const request = require('supertest');
const app = require('./../../app.js')
const knexfile = require('../../db/knexfile.js');
const db = require("knex")(knexfile.development);

describe('GET /courses/:id', () => {

    beforeAll(async () => {
        await db.raw('BEGIN');
    });

    afterAll(async () => {
        await db.destroy();
    });

    test('should return the correct course record', async () => {
        const courseId = 1;
        const response = await request(app).get(`/courses/${courseId}`);

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('id', courseId)
    });

    test('should return 404 for non-existent student', async () => {
        const nonExistentCourseId = 999;

        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(404);
    });



});