exports.up = async function(knex) {
    return await knex.schema.createTable("googleUsers",table=>{
        table.increments("id").primary();
        table.string("googleId").notNullable();
        table.string("name").notNullable();
        table.string("email",30).notNullable().defaultTo(" ");
        table.string("profile_picture").notNullable();
    })
};

exports.down = async function(knex) {
    return await knex.schema.dropTable("googleUsers")
};