// Adiciona o evento de clique no botão
document.getElementById('btnVerificar').addEventListener('click', verificarFrete);

function verificarFrete() {
    // Pega os valores do HTML
    const inputValor = document.getElementById("valorPedido").value;
    const isVip = document.getElementById("clienteVip").checked; // Retorna true ou false
    const resultado = document.getElementById("resultado");

    // Transforma o texto do input em número
    const valorPedido = Number(inputValor);

    // Lógica do Exercício 2: Valor maior que 200 OU Cliente VIP
    if (valorPedido > 200 || isVip === true) {
        resultado.innerHTML = "✅ Sucesso! O cliente tem direito ao Frete Grátis.";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "❌ Infelizmente, o cliente não tem direito ao Frete Grátis.";
        resultado.style.color = "red";
    }
}