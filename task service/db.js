const mogoose = require("mongoose")

async function connectDB (){
    try {
        await mogoose.connect(process.env.MONGO_URI)
        console.log("connected to the tasks colection succesfully ...")
    } catch (e) {
        console.log("failed to connect ! ", e.message)
    }
}

module.exports = connectDB