// Declarando a variável numerico para o primeiro if funcionar
let numerico = 10; 

if(numerico > 8) {
    console.log("O numero informado é maior que 8");
}

const nomealuno = 'Juliano';

// Corrigindo para J maiúsculo, igualzinho ao valor da variável
if (nomealuno === 'Juliano') {
    console.log('Ola juliano');
}

if(nomealuno === 'Maria') {
    console.log('Olá Maria'); // perceba que esse bloco foi ignorado 
}


//else (condição se falsa ou se a primeiro não for atendida)
const logado = false;

if(logado) {
    console.log('Esta logado!');
}
else {
    console.log('Não esta logado!');
}

const altura = 1.70;

if(altura > 1.80) {
    console.log("Essa pesoa tem maior de  1,80 de altura");

}else {
    console.log("Essa pessoa tem menos de 1,80 de altura");
}

const maioridade1 = "18 anos";
const habilitado = true;

if (maioridade1 >=18 && habilitado == false) {
    console.log('Não habilitado');
} else {
    console.log('Habilitada');
}

// else if (verificar várias condições)
const cachorro = 'Pastor Alemão';
const nome_do_cahorro = 'zeca';

if (cachorro === 'Poodle') {
    console.log('O ' + nome_do_cahorro + ' é um Poodle muito fofo!');

} else if (cachorro === 'Pastor Alemão') {
    console.log('O ' + nome_do_cahorro + ' é um Pastor Alemão. Ótimo cão de guarda!');

} else if (cachorro === 'Golden Retriever') {
    console.log('O ' + nome_do_cahorro + ' é um Golden. Deve ser muito brincalhão!');

} else 
    // O 'else' sozinho no final pega qualquer coisa que não caiu nas condições acima
    console.log('Raça não identificada para o cachorro ' + nome_do_cahorro);

if (1 > 2) {
    console.log('Teste 1 é verdadeiro');   
} else if(2 > 4) {
    console.log('Teste 2 é verdadeiro');
} else if(4 < 7) {
    console.log('Teste 3 é o verdadeiro');
} else {
    console.log("Não temos condição verdadeira");
} //