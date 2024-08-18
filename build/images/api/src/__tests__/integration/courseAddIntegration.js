const request = require('supertest');
const app = require('./../../app.js')


const knexfile = require('../../db/knexfile.js');
const db = require("knex")(knexfile.development);


const exampleCourse = {
    course_name: 'test',
    description: 'hallo',
    instructor: 'john doe',
    credits: Math.floor(Math.random() * 20)
};


describe('POST /courses', () => {

    beforeAll(async () => {
        await db('courses').truncate();
        await db.migrate.latest();
        await db.seed.run();
    });

    test('should create and return the correct course record', async () => {
        const response = await request(app)
            .post(`/courses`)
            .send(exampleCourse);

        expect(response.status).toBe(201);
        expect(response.body.data).toHaveProperty('course_name', exampleCourse.course_name);
        expect(response.body.data).toHaveProperty('description', exampleCourse.description);
        expect(response.body.data).toHaveProperty('instructor', exampleCourse.instructor);
        expect(response.body.data).toHaveProperty('credits', exampleCourse.credits);


    });

    // test('should return 401, wrong course record', async () => {
    //     const response = await request(app)
    //         .post(`/courses`)
    //         .send({
    //             ...exampleCourse,
    //             name: null
    //         });

    //     expect(response.status).toBe(401);


    //     const dbRecord = await db('courses').select("*").where("name", null);
    //     expect(dbRecord.length).toBe(0)


    // });

});