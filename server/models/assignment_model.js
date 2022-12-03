const mongoose=require('mongoose')

const assignmentSchema = new mongoose.Schema({
    title:{
        type: String
    },
    type:{
        type: String
    },
    year:{
        type: String,
    },
    description:{
        type: String
    },
    
})

mongoose.model("AssignmentModel",assignmentSchema)