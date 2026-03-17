//while (enquanto)
let x = 1;

while(x <= 10) {
    console.log(x);
    x = x + 1;
}

let y = 10;

while (y >= 5) {
    console.log(y);
    y--; //decremento: o mesmo que y = y - 1;
}

//do while (fazer enquanto)
let m = 15;

do {
    console.log(`${m}`);
    m = m + 2;
} while(m <= 21);

//comparando while e do while
let n = 12;

// Não vai executar nenhuma vez, pois 12 não é menor ou igual a 10
while(n <= 10) {
    console.log(n);
    n++; //incremento
}

// Executa pelo menos 1 vez antes do loop
do {
    console.log(n);
    n++;
} while(n <= 10);

// Executa pelo menos 1 vez antes do loop
do {
    console.log(n);
} while(n <= 10);

//for i in range()
// Ajuste: Adicionado 'let' para declarar a variável 'i' localmente
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

let j = 5;
for(j; j > 2; j--) {
    console.log(j);
}

//continue
for (let k = 1; k <= 7; k++) {
    //Pula a impressão do número 5
    if(k === 5){
        continue;
    }
    console.log(k);
}

//break
let contador = 0;

while(contador < 10) {
    console.log(contador);

    // Interrompe o loop se o contador for igual a 5
    if(contador === 5) {
        break;
    }

    // O incremento DEVE estar dentro do bloco while!
    contador++; 
}

//percorrendo um array com loop for
const list_nome = ['joao', 'maria', 'jose'];

for(let p = 0; p < list_nome.length; p++) {
    console.log(list_nome[p]);
}


//percorrendo um array com lop forEach
list_nome.forEach(function(nome) {
    console.log(nome);
});

//mais moderno - forEach com arrow funcition

list_nome.forEach(nome => {
    console.log(nome);
});

//nome e index com forEach
list_nome.forEach((nome, indice) => {
    console.log(indice, nome);
});

//iterando sobre um array
const frutasF = ['Morango', 'Abacate', 'Goiaba'];

for(const cada_fruta of frutasF) {
    console.log(cada_fruta);
}

//iterando sobre uma string
 const texto = 'Ola Mundo!'
 for(const letra of texto) {
    console.log(letra);
 }



