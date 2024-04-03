const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 2000
//port 번호로 서버 구분
app.use(bodyParser.json())  //데이터 타입을 json만 가져오겠다.
// 1. 주소를 통해서 정보 전달 - 데이터를 "주소"를 통해 
// 변수처럼 취급하라 ":" 
// parseInt "+"
// 가장 많이 쓰이는 방법1
app.post("/calc1/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1   //int형으로 변환
    const num2 = +req.params.num2   
    res.json({result: num1 + num2})
})
// 2. 데이터를 "쿼리스트링"을 통해서 보내기 
app.post("/calc2", (req, res) => {
    const num1 = +req.query.num1
    const num2 = +req.query.num2
    res.json({result: num1 + num2})
})
// 3. 데이터를 "바디"를 통해서 보내는 방법
// 가장 많이 쓰이는 방법2
app.post("/body_data", (req, res) => {
    console.log(req.body)
    res.json({})
})
// 4. 데이터를 "헤더"를 통해서 보내는 방법
app.post("/calc3", (req, res) => {
    console.log(JSON.stringify(req.headers));
    //header라는 데이터를 json으로 변경
    const num1 = +req.header("My-Number1")
    // num1에다가 
    const num2 = +req.header("My-Number2")
    res.json({ result: num1 + num2 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})