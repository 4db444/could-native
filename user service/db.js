const mongoose =  require("mongoose")

async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected successfully to users collection !")
    } catch (e) {
        console.log("could not connect to users collection")
    }
}

module.exports = connectDB