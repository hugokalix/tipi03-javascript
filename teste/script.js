// 1. Declarando a variável que estava faltando
const fraseB = "BEM VINDO AO CURSO!";

// Transformando a frase em letras minúsculas
const lower = fraseB.toLowerCase();
console.log(lower);

console.log("-----------------------");

// 2. Array dinâmico (lista)
let frutasD = [];
frutasD.push("Maçã");
frutasD.push("Uva");
frutasD.push("Manga");

// Percorrendo o array dinâmico
for(let i = 0; i < frutasD.length; i++){
    console.log("Índice " + i + ": " + frutasD[i]);
}

console.log("-----------------------");

// 3. Array bidimensional (Matriz)
let Matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

// Percorrendo a matriz com dois laços for (linhas e colunas)
for(let b = 0; b < Matriz.length; b++) {
    for(let c = 0; c < Matriz[b].length; c++) {
        console.log("[" + b + "] [" + c +"] = " + Matriz[b][c]);
    }
}


//Array associativo (Object)
let usuario = {
    nome: "Ana",
    idade: 18,
    cidade: "São Paulo"
};

for(let chave in usuario) {
    console.log(chave + ": " + usuario[chave]);
}


