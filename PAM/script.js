//1
alert("Bom-dia")
//2
function clicado() {
    alert("Botão foi clicado!");
}
//3
function mudarTexto() {
    var elemento = document.getElementById("meuElemento");
    elemento.textContent = "Texto alterado!";
}
//tag name
function adicionarClasse() {
    var itensLista = document.getElementsByTagName("li");
    for (var i = 0; i < itensLista.length; i++) {
        itensLista[i].classList.add("destaque");
    }
}
//class name
function alternarVisibilidade() {
    var elementos = document.getElementsByClassName("minhaClasse");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.toggle("escondido");
    }
} 
//query selector
function destacarElemento() {
    var elemento = document.querySelector(".destaque");
    elemento.style.backgroundColor = "yellow";
    elemento.style.padding = "10px";
}   
//query selectorAll
function alterarParagrafos() {
    var elementos = document.querySelectorAll(".paragrafo");
    elementos.forEach(function(elemento) {
        elemento.textContent = "Novo texto";
    });
}
//4
//onmouseover:
function mudarCor(elemento) {
    elemento.style.backgroundColor = "blue";
}
//onfocus
function mudarCor(elemento) {
    elemento.style.backgroundColor = "yellow";
}

function restaurarCor(elemento) {
    elemento.style.backgroundColor = "";
}
//onchange
function mostrarSelecao(elemento) {
    var selecao = document.getElementById("selecao");
    selecao.textContent = "Selecionado: " + elemento.value;
}
//onsubmit
function validarFormulario() {
    alert("Formulário enviado!");
}
//5
//função nomeada
function saudacao() {
    alert("Olá! Esta é uma função nomeada.");
}
// Função Nomeada com argumento e retorno
function calcularSoma() {
    var resultado = soma(3, 5);
    document.getElementById("resultadoSoma").textContent = resultado;
}
function soma(a, b) {
    return a + b;
}
// Função com Construtor
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
function criarPessoa() {
    var pessoa1 = new Pessoa("João", 30);
    alert("Pessoa criada: " + JSON.stringify(pessoa1));
}
// Função Literal
var multiplicacao = function(a, b) {
    return a * b;
};
function calcularMultiplicacao() {
    var resultado = multiplicacao(4, 6);
    document.getElementById("resultadoMultiplicacao").textContent = resultado;
}
// Função de Flecha
var quadrado = (x) => {
    return x * x;
};

function calcularQuadrado() {
    var resultado = quadrado(5);
    document.getElementById("resultadoQuadrado").textContent = resultado;
}
//função contar
var contador = 0;
var botao = document.getElementById("botao");
var contadorElemento = document.getElementById("contador");

botao.addEventListener("click", function() {
    contador++;
    contadorElemento.textContent = "Número de cliques: " + contador;
});
//caixa alta
function converterParaMaiusculas() {
    var entrada = document.getElementById("entrada").value;
    var resultado = entrada.toUpperCase();
    document.getElementById("resultado").textContent = "Texto em maiúsculas: " + resultado;
}
//soma
function somarNumeros() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = "Resultado da soma: " + resultado;
}