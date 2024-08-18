const request = require('supertest');
const app = require('./../../app.js')
const knexfile = require('../../db/knexfile.js');
const db = require("knex")(knexfile.development);




describe('GET /courses/:id', () => {

    beforeAll(async () => {
        await db('courses').truncate();
        await db.migrate.latest();
        await db.seed.run();
    });

    afterAll(async () => {
        await db.destroy();
    });

    test('should return the correct course record', async () => {
        const courseId = 1;
        const response = await request(app).get(`/courses/${courseId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('id', courseId);

        const dbRecord = await db('courses').select("*").where('id', courseId);
        expect(dbRecord.length).toBeGreaterThan(0);
        expect(dbRecord[0]).toHaveProperty('id', courseId);


    });

    test('should return 404 for non-existent course', async () => {
        const nonExistentCourseId = 999;
        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(404);

        const dbRecord = await db('courses').select("*").where('id', nonExistentCourseId);
        expect(dbRecord.length).toBe(0);
    });

    test('should return 401 for negative courseID', async () => {
        const nonExistentCourseId = -26;
        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(401);
    });

    test('should return 401 for a stringed courseID', async () => {
        const nonExistentCourseId = "hello";
        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(401);
    });

    test('should return 401 for tool large courseID', async () => {
        const nonExistentCourseId = 2147483647;
        const response = await request(app).get(`/courses/${nonExistentCourseId}`);
        expect(response.status).toBe(401);
    });



});