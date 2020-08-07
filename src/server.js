const express = require('express')/* importando o express */

const server = express()/* colocando o express na variável server */

server.use(express.static("public"))/* importando os arquivos de Css */

server.get("/", (req, res) => {/* primeira rota do tipo get */
    return res.sendFile(__dirname + "/views/index.html")/* retornando o Html */
})

server.get("/study", (req, res) => {/* segunda rota do tipo get para pegar os dados */
    return res.sendFile(__dirname + "/views/study.html")
})

server.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

server.listen(5500, () => {/* configurando a porta de comunicação */
    console.log('Servidor rodando na porta 5500');
})