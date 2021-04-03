const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Server is Running!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})