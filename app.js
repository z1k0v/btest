const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        msg: 'Hello B Zikov'
    })
})

app.listen(3000)