document.getElementById('buscar').addEventListener('click', async() => {
    // Usando .value (e não ariaValueMax)
    const cep = document.getElementById('cep').value.replace(/\D/g, ''); 
    const resultado_div = document.getElementById('resultado');

    if(cep.length === 8) {
        try {
            resultado_div.innerHTML = `<p>Buscando...</p>`;
            
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            if(!data.erro) {
                resultado_div.innerHTML = `
                <p>Logradouro: ${data.logradouro}</p>
                <p>Bairro: ${data.bairro}</p>
                <p>Cidade: ${data.localidade}</p>
                <p>Estado: ${data.uf}</p>
                `;
            } else {
                resultado_div.innerHTML = `<p>CEP não encontrado.</p>`;
            }
        }
        catch (error) {
            resultado_div.innerHTML = `<p>Erro ao buscar o CEP.</p>`;
            console.error('Erro:', error);
        }

    } else {
        resultado_div.innerHTML = `<p>Por favor, digite um CEP válido com 8 dígitos.</p>`;
    }
});