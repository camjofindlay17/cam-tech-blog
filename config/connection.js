const Sequelize = require('sequelize');

require('dotenv').config();

const { DB_NAME, DB_USER, DB_PW } = process.env;

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PW,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

module.exports = sequelize;
