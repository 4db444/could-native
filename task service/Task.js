const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }, 
    isDone : {
        type : Boolean,
        required : true
    },
    userId : {
        type : mongoose.Types.ObjectId
    }
})

module.exports = mongoose.model("Task", TaskSchema)