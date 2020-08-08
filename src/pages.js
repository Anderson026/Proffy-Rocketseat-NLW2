/* desestruturando e importando os objetos de format.js */
const { subjects, weekdays, getSubject } = require('./utils/format')

/* função para pegar o html e retornar na rota get */
function pageLanding(req, res) {
    return res.render("index.html")
}
/* pegando os dados da página study e retornar na segunda rota ger */
function pageStudy(req, res) {
    const filters = req.query/* variável para retornar os dados para o frontend */
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    /* se tiver dados */
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        /* adicionar dados a lista de proffys */
        proffys.push(data)

        return res.redirect("/study")
    }
    
    /*  se não, mostrar a página  */ 
    return res.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}