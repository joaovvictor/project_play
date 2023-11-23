let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#password')
let formLogin = document.querySelector('#form-login')

formLogin.addEventListener('submit',(evento)=>{

    evento.preventDefault()

    let loginRecuperado = localStorage.getItem('email')
    let senhaRecuperada = localStorage.getItem('senha')

    if(usuario.value == loginRecuperado && senha.value == senhaRecuperada){
        alert('Login efetuado com sucesso')
        location.href = '/index.html'
    } else {
        alert('Usuario ou senha invalidos')
        usuario.style.border = '2px solid red'
        senha.style.border = '2px solid red'
    }

})