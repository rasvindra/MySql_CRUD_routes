const express = require("express");
const router = express.Router();
const productRoutes = require("./product-routes.js")
const categoryRoutes = require("./category-routes.js")
const tagRoutes = require("./tag-routes.js")

router.get("/",(req,res)=>{
    res.send("Routing is Working!")
})

router.use("/api/products/",productRoutes)
router.use("/api/tags/",tagRoutes)
router.use("/api/categorys/",categoryRoutes)

module.exports = router;

