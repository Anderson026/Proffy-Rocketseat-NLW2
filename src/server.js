
/* Servidor */
const express = require('express')/* importando o express */

const server = express()/* colocando o express na variável server */

/* importando os dados de pages.js */
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

/* importando o nunjucks */
const nunjucks = require('nunjucks')
/* configurar o nunjucks */
nunjucks.configure('src/views', {
    express: server,
    noCache: true,/* não guardar os arquivos no cache */
})
/* receber os dados do req.body */
server.use(express.urlencoded({ extended: true}))

/* configurar arquivos estáticos (css, scripts, imagens) */
server.use(express.static("public"))
/* rotas da aplicação */
server.get("/", pageLanding)

server.get("/study", pageStudy)

server.get("/give-classes", pageGiveClasses)

server.post("/save-classes", saveClasses)

server.listen(5500, () => {/* configurando a porta de comunicação */
    console.log('Servidor rodando na porta 5500');
})
/* parei em 01:15:00 do vídeo 4 da nlw 2 */