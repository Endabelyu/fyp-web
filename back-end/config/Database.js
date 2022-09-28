import sequelize from 'sequelize';

const db = new sequelize('db_fyp', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
