document.addEventListener('DOMContentLoaded', function() {	
    let button = document.getElementById('criptografar');
    let mensagem = document.getElementById('mensagem');

    button.addEventListener('click', function() {
        mensagem.textContent = criptografar(mensagem.value);

})
































//percorrer o valor de imput e ir salvando em uma variavel para cada leta concatenar o valor correspondente
// quando clicar no botao o display vai mudar sua propriedadade para none e colocar o valor criptografado
