const express = require('express')
const app = express()

app.use(express.json())

app.post('/', function (req, res) {
    res.json(req.body)
})

app.listen(3000)