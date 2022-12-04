const mongoose=require('mongoose')

const teacherSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
})

mongoose.model("TeacherModel",teacherSchema)