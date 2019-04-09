exports.up = async function(knex, Promise) {
  try {
    const tableExists = await knex.schema.hasTable("requests");
    if (!tableExists) {
      return knex.schema.createTable("requests", table => {
        table.increments();
        table.string("user_id").notNullable();
        table.string("organization_id").notNullable();
        table.string("employee_id").notNullable();
        table.enum("request_type", [
          "maternity",
          "health",
          "marriage",
          "vacation"
        ]);
        table.date("start_date").notNullable();
        table.date("end_date").notNullable();
        table.enum("status", ["reject", "pending", "approved"]);
        table.timestamp("timestamps").notNullable();

        table.index("organization_id");
        table.unique("user_id");
        table.unique("employee_id");
      });
    } else {
      console.log("Table already Exists");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("requests");
};
