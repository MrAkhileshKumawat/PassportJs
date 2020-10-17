exports.up =async function(knex) {
    return await knex.schema.alterTable('githubUsers', function(t) {
        t.string('email', 30).notNullable().defaultTo(' ').alter();
      });
  
};

exports.down = async function(knex) {
    return await knex.schema.dropTable("githubUsers")  
};