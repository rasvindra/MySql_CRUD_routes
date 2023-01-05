const express = require("express");
const router = express.Router();
const productRoutes = require("./product-routes")
const categoryRoutes = require("./category-routes")
const tagRoutes = require("./tag-routes")

router.get("/",(req,res)=>{
    res.send("Routing is Working!")
})

router.use("/api/products/", productRoutes)
router.use("/api/tags/", tagRoutes)
router.use("/api/categorys/", categoryRoutes)