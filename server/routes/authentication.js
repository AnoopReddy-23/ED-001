const express=require('express')
const router=express.Router()
const mongoose = require('mongoose');
const UserModel = mongoose.model("UserModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then((dbUser) => {
            if (!dbUser) {//user not found
                return res.json({ result: "Invalid credentials!" });
            }
            bcrypt.compare(password, dbUser.password)
                .then((didMatch) => {
                    if (didMatch) {
                        // res.status(200).json({ result: "User Logged In successfully" });
                        // create and send a token
                        const jwtToken = jwt.sign({ _id: dbUser._id }, JWT_SECRET);
                        const { _id, username, email,userType,year } = dbUser;
                        res.json({ result:"Login successful", token: jwtToken, userInfo: { _id, username, email,userType, year  } });
                    } else {
                        return res.json({ result: "Invalid credentials!" });
                    }
                });
        })
        .catch((error) => {
            console.log(error);
        });
});

router.post('/register',(req,res)=>{
    //console.log(req.body)
    const { username, password, email, userType,year } = req.body;
    //console.log( username, password, email, city, profileImg)
    UserModel.findOne({ username: username })
        .then((dbUser) => {
            if (dbUser) {
                return res.json({ result: "User with email already exist." });
            }
            bcrypt.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ username, password: hashedPassword, email, userType, year});
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