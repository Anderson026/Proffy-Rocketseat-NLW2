/* Procurar o botão*/
document.querySelector('#add-time')
/* Qando clicar no botão */
.addEventListener('click', cloneField)

/* Executar uma ação */
function cloneField() {
    /* Duplicar os campos. Que campos? */
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    /* limpar os campos: que campos? */
const fields = newFieldContainer.querySelectorAll('input')
    /* para cada campo , limpar */
fields.forEach(function(field) {
    /* pegar o field do momento e limpa ele*/
    field.value = ""
})
    /* Colocar na página: onde? */
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}