//concatenação
//A concatenação serve para unir estrings com outros elementos ou seja com textos + variáveis
const meu_texto = 'Ola' + 'Mundo';
console.log(meu_texto)

const numero_novo = 15;
console.log('O numero é ' + numero_novo);

const meu_texto2 = 'Ola ' .concat('Mundo novamente');
console.log(meu_texto2);

//interplando uma string, um número e uma expressão
const primeiro_nome = 'João';
const idade = 30;
console.log(`Olá, ${primeiro_nome}, voce tem ${idade} anos.`); //via interpolação 

//comparação
console.log('Ola, ' + primeiro_nome + ' Você tem ' + idade + ' anos.'); //via concatenação