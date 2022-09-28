import db from '../config/database.js';
import sequelize from 'sequelize';

const { DataTypes } = sequelize;

const Image = db.define(
  'images',
  {
    name: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Image;
