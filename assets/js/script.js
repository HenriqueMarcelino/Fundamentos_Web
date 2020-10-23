/* 
    O DOM é uma linguagem case sensitiv = reconhece letras maisculas e minusculas
    O DOM pode ser acessado por tags
    
    Por tag: getByElementByTagNome()
    Por id: getByElementById()
    Por Nome: getByElementsByName()
    Por Classe: getByElementsByClassName()
    Por Seletor: querySelector()
*/

/*Acessando o DOM */
let nome = window.document.getElementById('nome')

/*Uma outra forma de fazer também é chamando direto o document */
let email = document.querySelector('#email')
let telefone = document.querySelector('#telefone')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let telefoneOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '70%'
email.style.width = '70%'


function verificaNome()
{
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        let nomeOk = true
    }
}

function verificaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1){
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        let emailOk = true
    }
}

function verificaTelefone()
{
    let txtTelefone = document.querySelector('#txtTelefone')
    if(telefone.value.length ===11){
        txtTelefone.innerHTML = "Número verificado"
        txtTelefone.style.color = 'green'
        
    }
    else{
        txtTelefone.innerHTML = "Número inválido"
        txtTelefone.style.color = 'red'
        let telefoneOk = true
        
    }
} 
    
function verificaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = 'O texto excedeu o limite permitido, maximo de 100 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        let AssuntoOk = true
    }
}
function enviar() {
    if(nomeOk == true && emailOk == true && telefoneOk == true && assuntoOk == true){
        alert ("Dados enviado")
    }
    else{
        alert('Dados enviado')
    }
    
}
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
    
}