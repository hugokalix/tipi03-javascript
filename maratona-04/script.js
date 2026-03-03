/*
Exercício 2 – Confeitaria (While – Produção de Bolos)
Pergunta:
Uma confeitaria precisa produzir 5 bolos para uma encomenda.
Crie um programa que utilize while para mostrar no console a produção de cada
bolo até completar os 5

*/

let bolos_produzidos = 1
let meta_bolos = 5

while (bolos_produzidos <= meta_bolos) {
    console.log(`Produzindo bolos ${bolos_produzidos}...`)
    bolos_produzidos++;
}
console.log("Produção do 5 bolos concluido com sucesso!")


/*
Pergunta:
Um psicólogo realizou 4 sessões no dia.
Crie um programa utilizando while para exibir cada sessão realizada até completar
as 4 sessões.

*/

let sessao_atual = 1
let total_sessoes = 4

while (sessao_atual <= total_sessoes) {
    console.log(`Sessão${sessao_atual} realizada com sucesso!.`)
    sessao_atual++;
}
console.log('Total de 4 sessões inicializada e terminadas com sucesso!')


//Exercício 1
 
 
let opcao = "morango";
 
switch (opcao){
    case "chocolate":
    console.log("Sabor escolhido: Chocolate 🍫");
    break;
    case "morango":
    console.log("Sabor escolhido: Morango 🍓 ");
    break;
    case "leite ninho":
    console.log("Sabor escolhido: Leite ninho 🥛")
    break;
    default:
    console.log("Não temos esse sabor disponível no momento.");
}
 
 
// Exercício 3
 
let servico = "sob medida"
 
switch (servico){
    case "ajuste":
    console.log(" Serviço escolhido: Ajuste de barra ✂️")
    break;
    case "reforma":
    console.log("Serviço escolhido: Reforma de Vestido 👗")
    break;
    case "sob medida":
    console.log("Serviço Escolhido: Confecção sob medida 🧵")
    break;
    default:
    console.log("Serviço não encontrado. Escolha uma opção válida.")
}
 










