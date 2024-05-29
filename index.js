const express = require("express")
const app = express()

app.get('/', (req, res) => {
        res.send("Hello, accKW")
})

app.listen(5002)