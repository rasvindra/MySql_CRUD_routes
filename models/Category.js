const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// JS file to create Category Model
class Category extends Model{}

Category.init({

category_name:{
    type:DataTypes.STRING,
    allowNull:false
    },
},
{
    sequelize,
});

module.exports=Category