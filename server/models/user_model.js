const mongoose=require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String
    },
    email:{
        type: String
    },
    userType:{
        type: String
    },
    year:{
        type: String
    },
})

mongoose.model("UserModel",userSchema)