var textInput = document.querySelector('#input-texto');
var outInput  = document.querySelector('#output');



function criptografar() {

    var texto = textInput.value;

    // trocar as letras por palavras
    var resultadoCriptografado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('container__resultado').innerHTML = '<textarea readonly id="output">' + resultadoCriptografado + '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'

    console.log(resultadoCriptografado);
}

function decodificar () {
    // console.log(resultadoCriptografado);
    var texto =  textInput.value;

    var resultadoDecodificado = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('container__resultado').innerHTML = '<textarea readonly id="output">' + resultadoDecodificado + '</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>'; 

    console.log(resultadoDecodificado);
}


function copiar() {
    var textoCopiar = document.getElementById('output');
  
    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  

// function copiar() {

//     var fraseCopiada = document.getElementById('texto__inicial__input');
    
//     navigator.clipboard.writeText(fraseCopiada.value);

//     alert("Frase copiada: " + fraseCopiada.value);

// }




















//percorrer o valor de imput e ir salvando em uma variavel para cada leta concatenar o valor correspondente
// quando clicar no botao o display vai mudar sua propriedadade para none e colocar o valor criptografado
