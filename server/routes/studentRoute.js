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

router.post('/add-student',(req,res)=>{
    //console.log(req.body)
    const { name, status, year, pending, submitted } = req.body;
    //console.log( username, password, email, city, profileImg)
    StudentModel.findOne({ name: name })
        .then((dbUser) => {
            if (dbUser) {
                return res.json({ result: "User with email already exist." });
            }
            const student = new StudentModel({ name, status, year, pending, submitted});
            student.save()
                .then((u) => {
                    //console.log(u)
                    res.json({ result: "Student Registered successfully" });
                })
                .catch((error) => {
                    console.log(error);
                });
        })
        .catch((error) => {
            console.log(error);
        });
})

module.exports=router;