const express =require('express');
const router =express.Router();
const {Product, Category} = require("../models");

// GET routes for categories 
router.get("/", async (req,res) => {
    try {
        const catergorys = await Category.findAll({
            include:[Product]
        })
        res.status(200).json(catergorys)
    } catch (err) {
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    }
})

// POST routes for categories 
router.post("/", async (req,res) => {
    try {
        const newCatergorys = await Category.create({
            category_name:req.body.category_name,
            id:req.body.id
        })
        res.status(201).json(newCatergorys)
    } catch (err) {
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    }
})

// GET by ID routes for categories 
router.get("/:id", (req, res)=> {
    Category.findByPk(req.params.id).then(category=>{
        if(!category){
            return res.status(404).json({msg:"Category does not Exist in Database!"})
        }
        res.json(category)
    }).catch(err=>{
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    })
})

// DELETE routes for categories 
router.delete("/:id",(req,res)=>{
    Category.destroy({
        where:{
            id:req.params.id
        }
    }).then(category=>{
        if(!category){
            return res.status(404).json({msg:"Category does not Exist in Database!"})
        }
        res.json(category)
    }).catch(err=>{
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    })
})

// UPDATE routes for categories 
router.put("/:id",(req,res)=>{
    Category.update({
        category_name:req.body.category_name
    },
        {
            where:{
                id:req.params.id
            }
        }).then(category=>{
            if(!category[0]){
                return res.status(404).json({msg:"Category does not Exist in the Database!"})
            }
            res.json(category)
        }).catch(err=>{
            res.status(500).json({
                msg:"Server Error. Please Try Again!",
                err
        })
    })
})

module.exports = router