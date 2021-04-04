exports.up = function(knex) {
    return knex.schema.createTable('comments', function(table) {
        table.increments('id');
  
        table.string('author').notNullable();
        table.string('question_id').notNullable();
        table.string('comment', 200).notNullable();
  
        table.foreign('author').references('name').inTable('users');
        table.foreign('question_id').references('id').inTable('questions');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('comments');
  };
  