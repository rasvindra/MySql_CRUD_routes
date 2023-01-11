const express =require('express');
const router =express.Router();
const {Product, Tag} = require("../models");

// GET routes for tags
router.get("/", async (req,res) => {
    try {
        const catergorys = await Tag.findAll({
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

// POST routes for tags
router.post("/", async (req,res) => {
    try {
        const newTag = await Tag.create({
            tag_name:req.body.tag_name,
            id:req.body.id
        })
        res.status(201).json(newTag)
    } catch (err) {
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    }
})

// GET by ID routes for tags
router.get("/:id", (req, res)=> {
    Tag.findByPk(req.params.id).then(tag=>{
        if(!tag){
            return res.status(404).json({msg:"Category does not Exist in Database!"})
        }
        res.json(tag)
    }).catch(err=>{
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    })
})

// DELETE routes for tags
router.delete("/:id",(req,res)=>{
    Tag.destroy({
        where:{
            id:req.params.id
        }
    }).then(tag=>{
        if(!tag){
            return res.status(404).json({msg:"Category does not Exist in Database!"})
        }
        res.json(tag)
    }).catch(err=>{
        res.status(500).json({
            msg:"Server Error. Please Try Again!",
            err
        })
    })
})

// UPDATE routes for tags
router.put("/:id",(req,res)=>{
    Tag.update({
        tag_name:req.body.tag_name
    },
        {
            where:{
                id:req.params.id
            }
        }).then(tag=>{
            if(!tag[0]){
                return res.status(404).json({msg:"Category does not Exist in the Database!"})
            }
            res.json(tag)
        }).catch(err=>{
            res.status(500).json({
                msg:"Server Error. Please Try Again!",
                err
        })
    })
})

module.exports = router