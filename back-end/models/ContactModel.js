import db from "../config/Database.js";
import sequelize from 'sequelize';

const {DataTypes} = sequelize;

const Contact = db.define('contacts',{
    type: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.TEXT
    },
    image: {
        type: DataTypes.TEXT
    }
},{
    freezeTabelName: true
})

export default Contact;