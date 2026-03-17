//método string: trim
const texto_espacado = " Essa é ma string com espaços em branco ";
const texto_sem_espacos = texto_espacado.trim();
console.log(texto_sem_espacos);

//método padStart
const numero = '1234';
const numero_formatado = numero.padStart(8, '0');
console.log(numero_formatado);

const codigo = 'ABC';
const codigo_preenchido = codigo.padStart(5, '-');
console.log(codigo_preenchido);

//preenchendo no final padEnd
const codigo_final = codigo.padEnd(5, '-');
console.log(codigo_final);

//Método split -dividir uma string
const texto_t = 'Essa é uma string para testar split';

// ATENÇÃO: Se quiser separar por espaços aqui, precisa colocar os parênteses com espaço (" ")
const palavras = texto_t.split(" "); 
console.log(palavras);

//Divide a string em um array de numeros, usando virgulas como separadores
const numeros = "1, 2, 3, 4, 5.".split(",");
console.log(numeros);

const textoT = "Essa é uma string para testar split";

// CORREÇÃO: Mudei o nome para palavras2
const palavras2 = textoT.split(" ");
console.log(palavras2);

// Divide a string em um array de 3 elementos, usando espaços como separadores
const partes = textoT.split(" ", 3);
console.log(partes);

// CORREÇÃO: Mudei o nome para numeros2
const numeros2 = "1,2,3,4,5".split(",");
console.log(numeros2);

//metodo join
const numeros_join = [1, 2, 3 ,4, 5];


//junta os numeros com vigulas como separador
const lista_numeros = numeros_join.join("-");
console.log(lista_numeros);

//justa os elementos de um array de strings
const frutas = ['maça', 'banana', 'laranja'];
const texto_frutas = frutas.join(' e ')
console.log(texto_frutas)

//método repeat
const testando_repeat = 'Ola';

// Repedindo a string 3 vezes
const texto_repetido = testando_repeat.repeat(3);
console.log(texto_repetido)