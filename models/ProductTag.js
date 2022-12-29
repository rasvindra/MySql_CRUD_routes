const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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