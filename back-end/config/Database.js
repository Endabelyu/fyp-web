import sequelize from 'sequelize';
// use ur local database password for connect databse
const db = new sequelize('db_fyp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
