const email = localStorage.getItem("email")
const log = document.querySelector('#test')
const logout = document.querySelector('#test2')

if(email){
    log.style.display = 'none'
} else {
    logout.style.display = 'none'
}