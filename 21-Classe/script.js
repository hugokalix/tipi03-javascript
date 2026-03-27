//Classe
class pessoa {
    
    //atributos
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    //método
    saudacao(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

//instãncia
const pessoa1 = new Pessoa('Ana', 20);
const pessoa2 = new Pessoa('Grazi', 41);
console.log(pessoa1.saudacao());
console.log(pessoa2.saudacao());

//Nova Classe - encapsulamento
class Pessoa_nova {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome(){
        return this._nome;
    } 

    set nome(novo_nome) {
        this._nome = novo_nome
    }
}

let pessoa = new Pessoa_nova('Ana', 20);
console.log(pessoa.nome);
pessoa.nome = 'Maria';
console.log(pessoa.nome);

//herança e para herdar caracteriscicas de outra classe
class animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazer_som() {
        console.log('O aninal faz um som.');
    }
}   

//subClasse
class cachorro extends animal{
    fazer_som(){
        console.log(`O cachorro ${this.nome} late.`);
    }
}

let rex = new cachorro('Rex');
rex.fazer_som();  //polimorfismo
//os atributos  e metodos estao dentro da classe
// as intancias estao fora da classe