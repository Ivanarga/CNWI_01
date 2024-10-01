const express = require('express')
const server = express()

const path = require('path')

server.use(express.static('public'))

server.use(express.json())

server.get('/cadastro', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

server.get('/pet', (req,res)=>{
    res.send({
        name: "meu gato",
        idade: "4 anos",
        peso: "300kg"
    })
})

server.listen(3000, () => {
    console.log("Servidor no ar...")
})