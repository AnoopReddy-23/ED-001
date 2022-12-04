const express=require('express')
const router=express.Router()
const mongoose = require('mongoose');
const AssignmentModel = mongoose.model("AssignmentModel");

router.post('/add-assignment',(req,res)=>{
    //console.log(req.body)
    const { title, type, year, description } = req.body;
    //console.log( username, password, email, city, profileImg)
            const assignment = new AssignmentModel({ title, type, year, description });
            assignment.save()
                .then((u) => {
                    //console.log(u)
                    res.json({ result: "Added successfully" });
                })
                .catch((error) => {
                    console.log(error);
                });
})

router.get('/get-assignments',(req,res)=>{
    AssignmentModel.find()
        .then((dbStudents)=>{
            res.json({assignments: dbStudents})
        })
        .catch((error)=>{
            res.json({error})
        })
})

module.exports=router;