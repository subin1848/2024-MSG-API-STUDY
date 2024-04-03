const express = require('express')
const app = express()
const port = 2000
//port 번호로 서버 구분

//GET, POST, PUT, PATCH, DELETE
let array = []
// 조회
app.get("/array", (req,res) => {
    res.json(array)
    // 꼭 json을 넣지 않아도 된다.  
     //보내는 방식일 때 json을 의미, send도 가능
    res.json(1)
    res.json("Hello")
})

app.post("/array", (req,res) => {
    array.push({content : array.length+1})
    res.json({result : "ok"})
})

app.delete("/array", (req,res) => {
    array = []
})


app.post("/array", (req, res) => {
    array.push({content : array.length+1})  //post 요청을 할 때마다 json 데이터가 들어감
    res.json({result: "ok"})
})
app.delete("/array", (req, res) => {
    array = []
    res.json({result: "delete ok"})
})
// listen : port번호에 대해 listen하고
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})