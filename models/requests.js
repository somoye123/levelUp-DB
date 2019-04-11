const orm = require("../orm");

const request = orm.Model.extend({
    tableName: "request",
    hasTimestamps: true,
    request: function () {
        return this.belongsTo("request");
    }
});

module.exports = org.model("request", request);
