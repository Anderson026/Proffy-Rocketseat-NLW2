const proffys = [
    { name: "Diego Fernandes",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "82996609725",
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
      subject: "Química",
      cost: "20", 
      weekday: [0], 
      time_from: [720], 
      time_to: [1220]
    },
    { name: "Daniele Evangelista",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
      whatsapp: "82996609725",
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
      subject: "Química",
      cost: "20", 
      weekday: [0], 
      time_from: [720], 
      time_to: [1220]
    }
]
/* função para pegar o html e retornar na rota get */
function pageLanding(req, res) {
    return res.render("index.html")
}
/* pegando os dados da página study e retornar na segunda rota ger */
function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require('express')/* importando o express */

const server = express()/* colocando o express na variável server */
/* importando o nunjucks */
const nunjucks = require('nunjucks')
/* configurar o nunjucks */
nunjucks.configure('src/views', {
    express: server,
    noCache: true,/* não guardar os arquivos no cache */
})

/* configurar arquivos estáticos (css, scripts, imagens) */
server.use(express.static("public"))
/* rotas da aplicação */
server.get("/", pageLanding)

server.get("/study", pageStudy)

server.get("/give-classes", pageGiveClasses)

server.listen(5500, () => {/* configurando a porta de comunicação */
    console.log('Servidor rodando na porta 5500');
})
/* parei em 01:15:00 do vídeo 4 da nlw 2 */