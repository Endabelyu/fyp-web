import sequelize from 'sequelize';

const db = new sequelize('db_fyp', 'root', 'Iam3ndabelyu', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
