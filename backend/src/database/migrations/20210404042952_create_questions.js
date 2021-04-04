exports.up = function(knex) {
    return knex.schema.createTable('questions', function(table) {
        table.increments('id');

        table.string('title', 200).notNullable();
        table.text('description', 2000).notNullable();
        table.string('category', 50).notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('questions');
};
