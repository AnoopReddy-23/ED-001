const express=require('express')
const router=express.Router()
const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


router.post('/register',(req,res)=>{
    //console.log(req.body)
    const { username, password, email, userType } = req.body;
    //console.log( username, password, email, city, profileImg)
    UserModel.findOne({ username: username })
        .then((dbUser) => {
            if (dbUser) {
                return res.json({ result: "User with email already exist." });
            }
            bcrypt.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ username, password: hashedPassword, email, userType});
                    user.save()
                        .then((u) => {
                            //console.log(u)
                            res.json({ result: "User Registered successfully" });
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                });

        })
        .catch((error) => {
            console.log(error);
        });
})

module.exports=router;