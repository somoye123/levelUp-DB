exports.up = async function(knex, Promise) {
  try {
    const tableExists = await knex.schema.hasTable("users");
    if (!tableExists) {
      return knex.schema.createTable("users", table => {
        table.increments();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").nullable();
        table.string("password").notNullable();
        table.timestamp("timestamps").notNullable();

        table.index("first_name");
        table.index("last_name");
        table.unique("email");
      });
    } else {
      console.log("Table already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
