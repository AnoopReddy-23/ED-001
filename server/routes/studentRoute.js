const express=require('express')
const router=express.Router()
const mongoose = require('mongoose');
const StudentModel = mongoose.model("StudentModel");


router.get('/data',(req,res)=>{
    StudentModel.find()
        .then((dbStudents)=>{
            res.json({students: dbStudents})
        })
        .catch((error)=>{
            res.json({error})
        })
})

module.exports=router;