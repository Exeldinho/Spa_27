const express = require('express')
const app = express()
const port = 2700

app.get('/', (req, res) => {
    res.send('All is fine..')
    })

app.listen(port, () => {
    console.log (`App is listening at port ${port}`)
    })