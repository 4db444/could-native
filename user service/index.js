require("dotenv").config()

const express = require("express")
const connectDB = require("./db")
const User = require("./User")

connectDB()
const app = express()
app.use(express.json())

app.post("/store", async (req, res) => {
    const user = User(req.body)
    try {
        await user.save()
    } catch (e) {
        console.log(e.message)
    }
    res.status(200).json({msg : "user created successfully !"})
})

app.listen(process.env.PORT, () => {
    console.log("server starts listenting at port: " + process.env.PORT)
})