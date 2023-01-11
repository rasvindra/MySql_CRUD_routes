const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag")
const ProductTag = require("./ProductTag");

//modularized index to export all models

Product.belongsTo(Category);
Category.hasMany(Product);
Tag.belongsTo(Product);
Product.hasMany(ProductTag);
ProductTag.belongsTo(Product);

module.exports = {
    Category,
    Product,
    Tag,
    ProductTag
}