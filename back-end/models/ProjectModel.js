import db from '../config/database.js';
import sequelize from 'sequelize';

const { DataTypes } = sequelize;

const Project = db.define(
  'projects',
  {
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Project;
