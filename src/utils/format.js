//Dados
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Segunda-feira",
    "Domingo",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
/* funcionalidades */
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject
}