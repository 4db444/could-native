require("dotenv").config()
const express = require("express")

const app = express()
app.use(express.json())

app.post("/signup", async (req, res) => {
    if(req.body.username && req.body.password){
        const userServiceRes = await fetch("http://localhost:4000/store", {
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(req.body)
        })

        if(userServiceRes.ok){
            res.json({msg : "user craeted successfully !"})
        }
    }else {
        res.json({err : "wrong feilds or data"})
    }
})

app.listen(process.env.PORT, () => {
    console.log("Auth service staart listening at port: " + process.env.PORT)
})