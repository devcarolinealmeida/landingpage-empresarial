//valida campo email e mostra mensagens de erro

const btnEmail = document.querySelectorAll("[data-btn]")
const inputEmail = document.querySelectorAll("[data-email]")
const msgErro = document.querySelectorAll("[data-msg]")


btnEmail.forEach((botao) => {
    botao.addEventListener("click", (evento) => {
        evento.preventDefault()
        verificaInput(evento.target.dataset.btn)
    })
})

function verificaInput(posicao){
        const i = posicao;
        if (inputEmail[i].value == "") {
            msgErro[i].classList.toggle("invisivel")
            msgErro[i].classList.add("visivel-erro")
            msgErro[i].classList.remove("visivel-sucesso")
            inputEmail[i].classList.add("input-mensagem-erro")
            msgErro[i].textContent = "Please enter your email"
        } else if (!validaEmail(inputEmail[i].value) == true) {
            msgErro[i].classList.toggle("invisivel")
            msgErro[i].classList.add("visivel-erro")
            msgErro[i].classList.remove("visivel-sucesso")
            msgErro[i].textContent = "Enter a valid email"
        } else {
            msgErro[i].classList.toggle("visivel-sucesso")
            inputEmail[i].classList.remove("input-mensagem-erro")
            inputEmail[i].value = ""
            msgErro[i].textContent = "Thanks for contacting us! We will be in touch with you shortly."
        }
    }

function validaEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)
}



// //valida email versao anterior

// const inputEmail = document.querySelector("#email")
// const btnEmail = document.querySelector("#btn-email")
// const msgErro = document.querySelector("#mensagem-erro")


// btnEmail.addEventListener("click", (evento) => {
//     evento.preventDefault()
//     if (inputEmail.value == "") {
//         msgErro.classList.toggle("invisivel")
//         msgErro.classList.toggle("visivel-erro")
//         msgErro.classList.remove("visivel-sucesso")
//         inputEmail.classList.toggle("input-mensagem-erro")
//         msgErro.textContent = "Please enter your email"
//     } else if (!validaEmail(inputEmail.value) == true) {
//         msgErro.classList.toggle("invisivel")
//         msgErro.classList.add("visivel-erro")
//         msgErro.classList.remove("visivel-sucesso")
//         msgErro.textContent = "Enter a valid email"
//     } else {
//         msgErro.classList.toggle("visivel-sucesso")
//         inputEmail.classList.remove("input-mensagem-erro")
//         inputEmail.value = ""
//         msgErro.textContent = "Thanks for contacting us! We will be in touch with you shortly."
//     }
// })

// function validaEmail(email) {
//     let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
//     return emailPattern.test(email)
// }