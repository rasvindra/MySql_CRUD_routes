const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// JS file to create Tag Model
class Tag extends Model{}

Tag.init({
    tag_name:{
        type:DataTypes.STRING,
    },
},
{
    sequelize
});

module.exports=Tag