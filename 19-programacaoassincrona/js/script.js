//setTimeOut
function exibir_mensagem() {
    console.log('A mensagem foi exibida após 6 segundos.');

}

setTimeout(exibir_mensagem, 6000);

//SetInterval executa a mesagem em looping
function exibir_mensagemnova() {
    console.log('A mensagem foi exibida após 3 segundos.');
}

setInterval(exibir_mensagemnova, 3000);

//asyn function

async function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Esperei ${segundos} segundos.`);
        }, segundos * 1000);
    });
}

async function executar() {
    const resultado = await esperar(3);
    console.log(resultado); 
}
executar();

