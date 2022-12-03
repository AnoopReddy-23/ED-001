const express=require('express')
const router=express.Router()
const mongoose = require('mongoose');
const TeacherModel = mongoose.model("TeacherModel");


router.get('/get-teachers',(req,res)=>{
    TeacherModel.find()
        .then((dbteachers)=>{
            res.json({teachers: dbteachers})
        })
        .catch((error)=>{
            res.json({error})
        })
})

router.post('/add-teacher',(req,res)=>{
    //console.log(req.body)
    const { name, email } = req.body;
    //console.log( username, password, email, city, profileImg)
    TeacherModel.findOne({ name: name })
        .then((dbUser) => {
            if (dbUser) {
                return res.json({ result: "User with email already exist." });
            }
            const teacher = new TeacherModel({ name, email});
            teacher.save()
                .then((u) => {
                    //console.log(u)
                    res.json({ result: "Teacher Registered successfully" });
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