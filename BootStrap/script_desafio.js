/* 
    O DOM é uma linguagem case sensitiv = reconhece letras maisculas e minusculas
    O DOM pode ser acessado por tags
    
    Por tag: getByElementByTagNome()
    Por id: getByElementById()
    Por Nome: getByElementsByName()
    Por Classe: getByElementsByClassName()
    Por Seletor: querySelector()
*/

/*Uma outra forma de fazer também é chamando direto o document */
let nome = document.querySelector('#Nome')
let login = document.querySelector('#Login')

/*Fazendo a validação dos campos */
let nomeOk = false
let LoginOk = false

function verificaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nomeOk.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        let nomeOk = true
    }
}
function verificaLogin(){
    let txtLogin = document.querySelector('#txtLogin')
    if(loginOk.value.indexOf('@')==-1){
    'Login inválido'
    txtLogin.style.color = 'red'
    }
    else{
        txtLogin.innerHTML = 'Login válido'
        txtLogin.style.color = 'green'
        let emailOk = true
    }
}
function entra(){
    if(nomeOk == true && LoginOk == true ){
        alert('Usuario verificado com sucesso')
    }
    else{
        alert('Informe seu login')
    }
}