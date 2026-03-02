// Valores do exercício-01
const bolos_vendidos = 35; // 
const meta = 30; // 

// Verificando se atingiu a meta (maior ou igual) 
const atingiu_meta = bolos_vendidos >= meta;

// Verificando se superou a meta (estritamente maior) 
const superou_meta = bolos_vendidos > meta;

// Exibindo mensagens baseadas nos operadores de comparação 
if (superou_meta) {
    console.log("Incrível! Ela superou a meta do dia.");
} else if (atingiu_meta) {
    console.log("Muito bem! Ela atingiu a meta do dia.");
} else {
    console.log("Infelizmente a meta não foi atingida hoje.");
}



// Valores do exercício-02
const valor_pedido = 180; 
const cliente_vip = true; 

// Verificando com o operador lógico OU ("||")
if (valor_pedido > 200 || cliente_vip === true) { 
    console.log("Sucesso! O cliente tem direito ao frete grátis.");
} else {
    console.log("O cliente não tem direito ao frete grátis. Não foi dessa vez");
}



