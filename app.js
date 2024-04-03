const express = require('express')
const app = express()
const port = 2000
//HTTP GET METHOD  
app.get("/", (req,res) => {
    res.json("hello world!")
})
app.get("/hello", (req,res) => {
    // res.header("Content-Type", "text/plain")
    res.send("<h1>Hello</h1>")
})

app.get("/data", (req,res) => {
    //json : json형식의 데이터를 보내는 send
    res.json({name: "John", age : 20})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})