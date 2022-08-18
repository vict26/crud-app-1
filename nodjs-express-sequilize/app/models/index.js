const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.courses = require("./course.model.js")(sequelize, Sequelize);
db.creators = require("./creator.model.js")(sequelize, Sequelize);
db.creators.hasMany(db.courses, { as: "courses" });
db.courses.belongsTo(db.creators, {
    foreignKey: "creatorId",
    as: "creator",
})

module.exports = db;