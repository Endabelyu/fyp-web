import db from '../config/Database.js';
import sequelize from 'sequelize';

const { DataTypes } = sequelize;

const ContactUs = db.define('contact_us',{
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.TEXT
    }
},{
    freezTableName: true
});

export default ContactUs;
