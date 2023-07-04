const express = require('express')

const server = express();

server.use(express.json())

const arquivo = []

server.listen(3000) 
server.post('/post-names', (req,res) => {
    const {id, name} = req.body;

    const names = {
        id, 
        name
    };

    arquivo.push(names)

    return res.json(names)

})