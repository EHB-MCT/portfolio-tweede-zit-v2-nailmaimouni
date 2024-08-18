const request = require('supertest');
const app = require('./../../app.js');
const knexfile = require('../../db/knexfile.js');
const db = require('knex')(knexfile.development);

describe('DELETE /courses/:id', () => {

    beforeAll(async () => {
        await db('courses').truncate();
        await db.migrate.latest();
        await db.seed.run();
    });

    afterAll(async () => {
        await db.destroy();
    });

    test('should delete the correct course record', async () => {
        const courseId = 1;

        const response = await request(app)
            .delete(`/courses/${courseId}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Course deleted');
        expect(response.body.data).toHaveProperty('id', courseId);

        const dbRecord = await db('courses').select("*").where('id', courseId);
        expect(dbRecord.length).toBe(0);
    });

    test('should return 404 for non-existent course', async () => {
        const nonExistentCourseId = 9999;

        const response = await request(app)
            .delete(`/courses/${nonExistentCourseId}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Course not found');
    });

    test('should return 401 for invalid course ID', async () => {
        const invalidCourseId = -1;

        const response = await request(app)
            .delete(`/courses/${invalidCourseId}`);

        expect(response.status).toBe(401);
    });
});