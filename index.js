const express = require('express')
app = express()
port = 3000

app.get('/', (req,res) => {
    res.send("Hello World!")
})

app.listen(port, () => {
    console.log(`O servidor está rodando no endereço: http://localhost:${port}`)
})