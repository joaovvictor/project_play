let campoNome = document.querySelector('#nome')
let campoEmail = document.querySelector('#email')
let campoSenha = document.querySelector('#senha')
let campoSenha2 = document.querySelector('#senha2')
let btnCadastrar = document.querySelector('input[type=submit]')
let formulario = document.querySelector('#form')

formulario.addEventListener('submit', (event)=>{
    event.preventDefault()

    if(campoSenha.value == campoSenha2.value){
        localStorage.setItem('nome', campoNome.value)
        localStorage.setItem('email', campoEmail.value)
        localStorage.setItem('senha', campoSenha.value)

        alert('Usuario cadastrado')
        location.href = 'log.html'
    } else {
        alert('Senhas diferentes')
        campoSenha.style.border = '2px solid red'
        campoSenha2.style.border = '2px solid red'
    }

})