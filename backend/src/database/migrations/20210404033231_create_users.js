exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id');

    table.string('name', 100).notNullable();
    table.string('email', 150).notNullable();
    table.string('password', 50).notNullable();
    table.string('occupation', 50).notNullable();
    table.boolean('teacher').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
