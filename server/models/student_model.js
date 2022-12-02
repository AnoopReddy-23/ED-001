const mongoose=require('mongoose')

const studentSchema = new mongoose.Schema({
    name:{
        type: String
    },
    status:{
        type: String
    },
    pending:{
        type: String
    },
    submitted:{
        type: String
    },
})

mongoose.model("StudentModel",studentSchema)