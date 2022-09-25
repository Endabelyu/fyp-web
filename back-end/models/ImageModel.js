import db from "../config/Database.js";
import sequelize from 'sequelize';

const { DataTypes } = sequelize;

const Image = db.define('images',{
    path: {
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true
})

export default Image;