const Category = require("./Category");
const Product = require("./Product");
const Tag = require("./Tag")
const ProductTag = require("./ProductTag");

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