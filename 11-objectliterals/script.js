//object literals
const objeto_pessoa = {
    nome: "joão",
    idade: 30,
}

console.log(objeto_pessoa);
console.log(typeof objeto_pessoa);
console.log(objeto_pessoa.nome);

//removendo uma propriedade de um objeto
delete objeto_pessoa.idade;
console.log(objeto_pessoa);


//adicionando uma propriedade ao objeto
objeto_pessoa.sobrenome = "Santana";
console.log(objeto_pessoa);


//Metodo Assign
const objeto1 = {
    altura: "Maria",
    idade: 22
};

const objeto2 = {
    altura: 1.65,
    genero: "Feminino",
};

const objeto_destino = {};

Object.assign(objeto_destino, objeto1, objeto2);
console.log(objeto_destino);


//Método keys
const chaves = Object.keys(objeto_destino);
console.log(chaves);

//mutação - atribuição
const hospede = {
    nome:'Alberto',
};

hospede.nome = "júnior";
console.log(hospede.nome);

//mutação - inserção
hospede.sobrenome = 'Lima',
console.log(hospede);

//mutação - operador de adição
const hospede_novo = {
    nome: 'Priscila',
    idade: 42,
};

hospede_novo.idade += 2;
console.log(hospede_novo.idade);

//muracao - deletar
delete hospede_novo.nome;
console.log(hospede_novo);

//desestruturando objetos
const usuarioA = {
    primeiro_nome: 'Pablo',
    sobre_nome: 'Xavider',
    profissao: 'Pedreiro',
};

const[primeiro_nome, sobre_nome, profissao] = Object.values(usuarioA);
console.log(primeiro_nome, sobre_nome, profissao);




