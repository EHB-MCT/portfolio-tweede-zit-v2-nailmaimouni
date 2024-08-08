exports.up = function(knex) {
    return knex.schema.createTable('courses', table => {
      table.increments('id').primary();
      table.string('course_name').notNullable();
      table.text('description');
      table.string('instructor');
      table.integer('credits');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('courses');
  };