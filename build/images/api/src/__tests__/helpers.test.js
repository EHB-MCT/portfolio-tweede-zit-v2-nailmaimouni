const {
    checkCoursesName
} = require("./../helpers/endpointHelpers.js");

/**
table.increments('id').primary();
table.string('course_name').notNullable();
table.text('description');
table.string('instructor');
table.integer('credits');
 */

test("check name", () => {

    expect(checkCoursesName("")).toBe(false)
})