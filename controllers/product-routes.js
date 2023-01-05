const express =require('express');
const router =express.Router();
const {Product, Category, ProductTag} = require("../models");

router.get("/", async (req,res) => {
    try {
        const products = await Product.findAll({
            include:[Category,ProductTag],
        })
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    }
})

router.post("/", async (req,res) => {
    try {
        const newProduct = await Product.create({
            product_name:req.body.product_name,
            price:req.body.price,
            stock:req.body.stock,
            category_id:req.body.category_id,
            id:req.body.id
        })
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    }
})

router.get("/:id", (req, res)=> {
    Product.findByPk(req.params.id).then(product=>{
        if(!product){
            return res.status(404).json({msg:"Product does not Exist in Database!"})
        }
        res.json(product)
    }).catch(err=>{
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    })
})

router.delete("/:id",(res,res)=>{
    Product.destroy({
        where:{
            id:req.params.id
        }
    }).then(product=>{
        if(!product){
            return res.status(404).json({msg:"Product does not Exist in Database!"})
        }
        res.json(product)
    }).catch(err=>{
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    })
})

router.put("/:id",(req,res)=>{
    Product.update({
        product_name:req.body.product_name,
        price:req.body.price,
        stock:req.body.stock,
        category_id:req.body.category_id,
    },
        {
            where:{
                id:req.params.id
            }
        }).then(product=>{
            if(!product[0]){
                return res.status(404).json({msg:"Product does not Exist in the Database!"})
            }
            res.json(product)
        }).catch(err=>{
            res.status(500).json({
                msg:"Server Error. Please Try Again!",
                err
        })
    })
})

module.exports = router