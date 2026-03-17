//Funções

function minha_funcao() {
    console.log('Teste de Função');
}

minha_funcao();
minha_funcao(); //reproveitando a função

const minha_funcao_variavel = function(){
    console.log("Teste de função na variável");
}

minha_funcao_variavel();

//função no parâmetro
function funcao_no_parametro(txt) {
    console.log(`Exibindo ${txt}`);
}

funcao_no_parametro("Teste de Função no parâmetro");
funcao_no_parametro("Testando novamente");

//return
const a = 5;
const b = 6;
const c = 10;
const d = 40;

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b); //a constante guarda o return da função
console.log(resultado);
console.log(soma(c, d)); //executa o return

//arrow fuction
const quadrado = (numero) => numero * numero;
console.log(quadrado(5));

//mais uma arrow function
const raiz_quadrada = (x) =>{
    return x * x;
}

//arrow function de cima abreviada
console.log(raiz_quadrada(4));

const raiz_quadrada2 = (x) => x * x;
console.log(raiz_quadrada2(5))

//Funções que retornam algo(return)
function soma_2(m, n) {
    return m + n;
}

const eh_par = (n) => n % 2 === 0;
console.log(soma_2(3, 4));
console.log(eh_par(10));

//Funções que não retornam nada (void)
function mostrar_mensagem () {
    console.log("Ola, Mundo!");
}

function mostrar_soma(a, b) {
    console.log("Soma = ", a + b);
}

mostrar_mensagem();
mostrar_soma(3, 4);

//Funções com parãmetros
function saudar(nome) {
    console.log(`Ola, ${nome}`);
}

function potencia(base, expoente = 2){
    return base ** expoente;
}

saudar("Ana");
console.log(potencia(5));
console.log(potencia(2, 3)); //sobrescrevendo o expoente original


//Função sem parâmetros e sem retorno
function exiba_mensagem(){
    console.log("Boas vindas ao site!")
} 

exiba_mensagem();

//Função sem parâmetro, com retorno
function obser_ano_atual() {
    return new Date().getFullYear();
}

console.log(obser_ano_atual())

//Escopo aninhado
let o = 15;

function escopo_aninhado() {
    let o = 30;

    if(true){
        let o = 35;

        if(true){
            let o =40;
            console.log(o);
        }
        console.log(o)
    }
    console.log(o);
}

escopo_aninhado();
console.log(o) //chamado a constante inicial


//recursão

function fatorial(numero) {
    if(numero <= 1) {
        return 1;
    } else {
        return numero * fatorial(numero - 1)

    }
}
console.log(fatorial(0));
console.log(fatorial(5));
console.log(fatorial(3));
/*
fatorial(5)
retornar 5 * fatorial(4)
retornar 4 * fatorial(3)
retornar 3 * fatorial(2)
retornar 2 * fatorial(1)
caso base - return 1

return 1
fatorial(2) * 1 = 2
fatorial(3) * 2 = 6
fatorial(4) * 6 = 24
fatorial(5) * 24 = 120
resultado da recursão = 120
*/

//Conversão de tipo
let x = "10";
let y = "3.5";

let inteiro = parseInt(x);
let decimal = parseFloat(y);
let texto = String(100); //vai guardar uma string de 100
let logico = Boolean(1); //1 = true, 0 = false

console.log(inteiro, decimal, texto, logico);

//rest operator
function nova_funcao(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
}

nova_funcao(1, 2, 3, 4, 5);

//Funções matemáticas
let e = -10;
let f = 2.7;

console.log(Math.abs(e)); //valor absoluto
console.log(Math.pow(2, 3)); //potênva
console.log(Math.round(f)); //aproximadamente
console.log(Math.max(4, 9, 1)); //numero maior / máximo
console.log(Math.max(4, 9, 1)); //numero menor / minimo


//funções de sequência/lista
const lista = [1, 2, 3, 4, 5]; //comprimento

console.log(lista.length); //comprimento
console.log(lista.reduce((a, b) => a + b)); //soma
console.log([...lista].sort((a, b) => b - a)); //ordenação decrescente

const dobrados = lista.map(g => g * 2); //aplica função em cada item
console.log(dobrados);


const pares_novos = lista.filter(h => h % 2 === 0); //aplica filtro nos items
console.log(pares_novos);


//Função de depuraçao
let i = 10;
let j = "Ana";
let lista_nova = [1, 2, 3];

console.log(typeof i);
console.log(typeof j);
console.log(typeof lista_nova);

console.log(Object.getOwnPropertyNames(lista_nova));
console.log(console.log.toString());


/* 1. Configuração (O que você acabou de mandar)
const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Execução (O código da imagem)
readLine.question("Digite seu nome: ", nome => {
    readLine.question("Digite sua idade: ", idade => {
        console.log("Nome: ", nome);
        console.log("Idade: ", idade);
        readLine.close(); // Encerra o programa
    });
});

*/
//funcao de prompt
const nome_novo2 = prompt("Qual o seu nome?");
console.log(nome_novo2);

const idade = prompt("Qual a sua idade");
console.log(idade);

//Função de alerta - exibe caixa de diálogo
alert("Erro ao preencher o formulário!");

