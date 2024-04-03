//기본 구조
const express = require('express')
const app = express()
const port = 2000
//port 번호로 서버 구분

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})