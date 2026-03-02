//comando DOM e evento de click
document.getElementById('btnVerificar').addEventListener('click', verificar);


//Função
function verificar(){
    NO 
    const resultado = document.getElementById("resultado");

    const numero = Number(input);

    if (numero > 10) {
        resultado.innerHTML = "O número é maior que 10.";
        resultado.style.color = "green";
    }
    else if (numero === 10) {
        resultado.innerHTML = "O número é igual a 10.";
        resultado.style.color = "orange";
    }
    else {
        resultado.innerHTML = "O número é menor que 10.";
        resultado.style.color = "blue";
    }
}


let opcao = "chocolate";

switch(opcao) {
    case "pizza":
        console.log("Pizza chegando!");
        break;
    case "sushi":
        console.log("Sushi fresquinho!");
        break;
    case "hamburguer":
        console.log("Hambúrguer suculento!");
        break;
    default:
        console.log("Não temos esse produto!");
}

