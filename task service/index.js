require("dotenv").config()
const express = require("express")
const connectDB = require("./db")

const app = express()
connectDB()

app.listen(process.env.PORT, () => {
    console.log("tasks microsercie starts listening at: " + process.env.PORT)
})