// Objeto JavaScript
const pessoa = {
    nome: "Maria",
    idade: 30,
    profissao: "Desenvolvedora"
};

// Transformando em JSON
const string_json = JSON.stringify(pessoa);
console.log(string_json);

// Convertendo de volta para objeto
const pessoa_2 = JSON.parse(string_json);
console.log(pessoa_2);

// JSON (Corrigido: usando aspas duplas, que são obrigatórias no padrão JSON)
const meu_json = `{
    "nome": "junior",
    "idade": 21,
    "skills": ["HTML", "CSS", "Javascript"]
}`;

console.log(meu_json);
console.log(typeof meu_json);

// String JSON para Objeto
const meu_objeto = JSON.parse(meu_json);
console.log(meu_objeto);
console.log(meu_objeto.nome);
console.log(typeof meu_objeto);

// Objeto para String JSON (Corrigido: convertendo o 'meu_objeto' em vez da string 'meu_json')
const json_string = JSON.stringify(meu_objeto);
console.log(json_string);
console.log(typeof json_string);

// JSON Válido
const valido_json = `{
    "nome": "junior",
    "idade": 21
}`;

const meu_objeto_valido = JSON.parse(valido_json);
console.log(meu_objeto_valido.nome); // Vai imprimir: junior