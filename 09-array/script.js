//arrays
const nomes = ['joao', 'maria', 'jose'];
console.log(nomes)
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])


//adicionando um elemento no array
nomes.push('Beatriz');
console.log(nomes);

//removendo o ultimo elemento do array
nomes.pop();
console.log('Beatriz foi removida ' + nomes);

//Alterar um elemento do array
nomes[0] = 'João Pedro';
console.log(nomes);
