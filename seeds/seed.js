require("dotenv").config();
const sequelize = require("../config/connection");
const {Product,Category,Tag,ProductTag} = require("../models");

const productSeed = [
    {
        product_name: 'Plain T-Shirt',
        price: 14.99,
        stock: 14,
        category_id: 1,
      },
      {
        product_name: 'Running Sneakers',
        price: 90.0,
        stock: 25,
        category_id: 5,
      },
      {
        product_name: 'Branded Baseball Hat',
        price: 22.99,
        stock: 12,
        category_id: 4,
      },
      {
        product_name: 'Top 40 Music Compilation Vinyl Record',
        price: 12.99,
        stock: 50,
        category_id: 3,
      },
      {
        product_name: 'Cargo Shorts',
        price: 29.99,
        stock: 22,
        category_id: 2,
      },
]

const categorySeed = [
    {
        category_name: 'Shirts',
      },
      {
        category_name: 'Shorts',
      },
      {
        category_name: 'Music',
      },
      {
        category_name: 'Hats',
      },
      {
        category_name: 'Shoes',
      },
]

const tagSeed = [
    {
        tag_name: 'rock music',
      },
      {
        tag_name: 'pop music',
      },
      {
        tag_name: 'blue',
      },
      {
        tag_name: 'red',
      },
      {
        tag_name: 'green',
      },
      {
        tag_name: 'white',
      },
      {
        tag_name: 'gold',
      },
      {
        tag_name: 'pop culture',
      },
]

const productTagSeed =[
    {
        product_id: 1,
        tag_id: 6,
      },
      {
        product_id: 1,
        tag_id: 7,
      },
      {
        product_id: 1,
        tag_id: 8,
      },
      {
        product_id: 2,
        tag_id: 6,
      },
      {
        product_id: 3,
        tag_id: 1,
      },
      {
        product_id: 3,
        tag_id: 3,
      },
      {
        product_id: 3,
        tag_id: 4,
      },
      {
        product_id: 3,
        tag_id: 5,
      },
      {
        product_id: 4,
        tag_id: 1,
      },
      {
        product_id: 4,
        tag_id: 2,
      },
      {
        product_id: 4,
        tag_id: 8,
      },
      {
        product_id: 5,
        tag_id: 3,
      },
]

const seedDb = async () => {
    await sequelize.sync({force:true});
    const Products = await Product.bulkCreate(productSeed);
    const Categories = await Category.bulkCreate(categorySeed);
    const Tags = await Tag.bulkCreate(tagSeed);
    const ProductTags =await ProductTag.bulkCreate(productTagSeed);
    console.log("Database Seeded!");
    process.exit(0);
}

seedDb();