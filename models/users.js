const orm = require("../orm");

const users = orm.Model.extend({
  tableName: "users",
  hasTimestamps: true,
  request: function() {
    return this.hasMany("request");
  }
});

module.exports = org.model("users", users);
