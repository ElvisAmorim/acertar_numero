/* variacoes do random */
/* let mathRandomZeroUm = Math.random()
console.log(mathRandomZeroUm)
let mathRandomFracZeroCem = Math.random() * 100 + 1
console.log(mathRandomFracZeroCem)
let mathRandomInt = Math.floor(Math.random() * 100 + 1)
console.log(mathRandomInt) */

/* variaveis */
let numComputador
let numInformado = []
let tentativa = 10
let maxTentativa = 1
let maxPalpite

function inicial() {
    numComputador = Math.floor(Math.random()* 100 + 1) //armazena resultado na variavel
    console.log(numComputador) //testar no console
}

//iniciar novo jogo quando clicar no botao no html
function novoJogo(){
    window.location.reload()
}

/* Quando informado um valor no "inputBox" no html, vai chamar a funcao "numComparar" no js */
/* No html tem essa funcao */
function numComparar(){
    const meuNum = Number(document.getElementById('inputBox').value)  //nº informado no campo inputbox no html e associando a nova ariavel
    numInformado.push(' ' + meuNum) //pegar o valor de uma variavel e colocar na array com espaco
    document.getElementById('txtTentativas').innerHTML = numInformado //retornar no html tentativas

    if(tentativa > maxTentativa){
        //substituir o texto incial no html
        if(meuNum > numComputador){
            document.getElementById('textOutput').innerHTML = "Seu nº está acima"
            document.getElementById('inputBox').value = '' //esvaziar campo
            tentativa-- //contar a tentativa
            document.getElementById('attempts').innerHTML = tentativa //informar no html a contagem das tentativas
        }
        else if(meuNum < numComputador){
            document.getElementById('textOutput').innerHTML = "Seu nº está abaixo"
            document.getElementById('inputBox').value = '' //esvaziar campo
            tentativa-- //contar a tentativa
            document.getElementById('attempts').innerHTML = tentativa //informar no html a contagem das tentativas
        }
        else{
            document.getElementById('textOutput').innerHTML = "VOCÊ ACERTOU!!"
            tentativa-- //contar a tentativa
            document.getElementById('attempts').innerHTML = tentativa //informar no html a contagem das tentativas
            document.getElementById('inputBox').setAttribute('Readonly','Readonly') //bloquear edicao do campo apos zerar as tentativas
        }
    }
    else{
        document.getElementById('textOutput').innerHTML = "VOCÊ PERDEU!! O nº era " + numComputador
        document.getElementById('inputBox').setAttribute('Readonly','Readonly') //bloquear edicao do campo apos zerar as tentativas
    }
}


//limitar palpite
function limPalpite(){
    if(maxPalpite.value > 100){
        maxPalpite.value = 100
    }
}
maxPalpite = document.getElementById("inputBox")
maxPalpite.addEventListener("input",limPalpite)

//ou

//numero max 100
/* let input = document.getElementById("inputBox");
input.addEventListener("input",function(){
    if(input.value > 100){
        input.value = 100;
    }
}) */


/* function armPalpite(teste){
    if(numInformado.includes(meuNum)){
        alert("Esse valor já foi informado. Por favor, escolha outro valor.");
        return;
    }
    numInformado.push(' ' + meuNum)
} */



/* melhorias: */
//limitar a digitacao ate o numero 100
//apresentar uma cx de informacao se ganhou ou perdeu





