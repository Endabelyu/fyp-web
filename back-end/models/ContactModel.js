import db from '../config/Database.js';
import sequelize from 'sequelize';

const { DataTypes } = sequelize;

const Contact = db.define(
  'contacts',
  {
    instagram: {
      type: DataTypes.STRING,
    },
    github: {
      type: DataTypes.STRING,
    },
    linkedin: {
      type: DataTypes.STRING,
    },
    twitter: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTabelName: true,
  }
);

export default Contact;
