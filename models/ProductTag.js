const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// JS file to create ProductTag Model
class ProductTag extends Model{}

ProductTag.init({
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    tag_id:{
        type:DataTypes.INTEGER,
    }
},{
    sequelize
});

module.exports=ProductTag