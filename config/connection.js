const Sequelize = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:"localhost",
        dilaect: "mysql",
        port: 3306,
    },
  );
}

modeule.exports = sequelize