const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model{}

Product.init({
    product_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DECIMAL(8,2),
        allowNull:false,
        unique:true,
        validate:{
            isDecimal:true
        }
    },
    stock:{
        type:DataTypes.INTEGER,
        allowNull: false,
        defaultValue:10,
        validate: {
            isNumeric:true
        }
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        default:10,
        validate:{
            isNumeric:true
        }
    }
},
{
    sequelize,
});

module.exports=Product