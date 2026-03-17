//array
const nomes = ["João", "Maria", "José"];
 
console.log(nomes);
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
console.log(nomes[3]); //essa posição não existe (undefined)
 
//Adicionando um elemento no array
nomes.push("Beatriz");
console.log(nomes);
 
//Removendo o último elemnto do array
nomes.pop();
console.log("Beatriz foi removida " + nomes);
 
//Alterar um elemento do array
nomes[0] = "João Pedro";
console.log(nomes);
 
//Concatenar dois arrays
const numeros = [6, 7, 8];
console.log(numeros.length);
 
const outrosNumeros = [3, 9, 2];
const juncaoNumeros = numeros.concat(outrosNumeros);
console.log(juncaoNumeros);
 
 
//Removendo o primeiro elemento do array
const nomesNovos = ["Joaquina", "Felipe", "Plínio"];
 
const primeiroNome = nomesNovos.shift();
console.log(nomesNovos);
console.log(nomesNovos[0]);
 
//Adicionar um ou mais elementos no início do array
const numerosTeste = [1, 2, 3];
 
numerosTeste.unshift(0);
console.log(numerosTeste);
 
//Encontrar a primeira ocorrência do elemento especificado
const frutas = ["maçã", "banana", "manga", "abacaxi"];
 
console.log(frutas.indexOf("maçã"));
console.log(frutas.indexOf("laranja"));
 
//Encontrar a última ocorrência do elemento especificado
const letras = ["a", "b", "c", "a", "d"];
 
console.log(letras.lastIndexOf("a"));
console.log(letras.lastIndexOf("b"));
console.log(letras.lastIndexOf("z"));
 
//Verifica se um elemento está presente no array
const frutasDona = ["maçã", "banana", "laranja"];
 
const temMaca = frutasDona.includes("maçã");
const temMelancia = frutasDona.includes("melancia");
console.log(temMaca);
console.log(temMelancia);
 
//includes à partir de uma posição
const letrasNovo = ["a", "b", "c", "d", "a"];
const temAPos2 = letrasNovo.includes("b", 2);
console.log(temAPos2);
 
//revertendo array
const testandoReverse = [1, 2, 3, 4, 5];
 
testandoReverse.reverse();
console.log(testandoReverse);
 
//invertendo a ordem do array
const testandoSpread = ["a", "b", "c", "d", "e"];
console.log(testandoSpread);
 
const novaLetras = [...testandoSpread].reverse();
console.log(novaLetras);
 
//converte todas as letras de uma string para maiúsculas
const fraseA = "Boas vindas!";
const upper = fraseA.toUpperCase();
console.log(upper);
 
//converte todas as letras de uma string para minúsculas
const fraseB = "QUE LEGAL!";
const lower = fraseB.toLowerCase();
console.log(lower);
 
 
//while (enquanto)
let x = 1;
 
while(x <= 10){
console.log(x);
x = x + 1;
}
 
let y = 10;
 
while(y >= 5){
    console.log(y);
    y--; //decremento: o mesmo que y = y - 1;
}
 
//do while (fazer enquanto)
let m = 15;
 
do{
    console.log(`${m}`);
    m = m + 2;
} while(m <= 21);
 
 
//comparando while e do while
let n = 12;
 
while(n <= 10){
console.log(n);
n++; //incremento
}
 
//executa pelo menos 1 vez antes do loop
do{
    console.log(n);
    n++;
}while(n <= 10);
 
 
//break
let contador = 0;
 
while(contador < 10){
  console.log("Contador: " + contador);
 
  // Interrompe o loop se o contador for igual a 5
  if(contador === 5){
    break;
  }
 
  contador++;
}
 
//for
for(i = 1; i <= 5; i++){
    console.log(i);
}
 
let j = 5;
 
for(j; j > 2; j--){
    console.log(j);
}
 
//continue
for(let k = 1; k <= 7; k++){
    // Pula a impressão do número 5
    if(k === 5){
      continue;
    }
 
    console.log(k);
  }
 
//percorrendo um array com loop for
const listNome = ["João", "Maria", "José"];
 
for(let p = 0; p < listNome.length; p++){
  console.log(listNome[p]);
}
 
//percorrendo um array com loop forEach
listNome.forEach(function(nome) {
  console.log(nome);
});
 
//mais moderno - forEach com arrow function
listNome.forEach(nome => {
  console.log(nome);
});
 
//nome e index com forEach
listNome.forEach((nome, indice) => {
  console.log(indice, nome);
});
 