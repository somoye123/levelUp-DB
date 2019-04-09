exports.up = async function(knex, Promise) {
  try {
    const tableExists = await knex.schema.hasTable("employees");
    if (!tableExists) {
      return knex.schema.createTable("employees", table => {
        table.increments();
        table.string("employee_id").notNullable();
        table.string("first_name").notNullable();
        table.string("middle_name").nullable();
        table.string("last_name").notNullable();
        table.enum("gender", ["male", "female", "binary", "undefined", "n/a"]);
        table.date("dob").nullable();
        table.string("phone", 15).notNullable();
        table.string("email").nullable();
        table.string("department", 250);

        table.index("first_name");
        table.index("last_name");
        table.unique("email");
        table.unique("employee_id");
      });
    } else {
      console.log("Table already exists");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("employees");
};
