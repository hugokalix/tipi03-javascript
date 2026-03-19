//adicionando evento
const btn = document.querySelector("#meu-botao");
//dois argumentos, tipo de evento e função que vai accontecer apos clicar no evento
btn.addEventListener('click', function(){
console.log('Clicou!'); 
});


//adicionando evento
const segundobtn = document.querySelector("#com-evento");

function imprimirMensagem(){
  console.log("Teste");
}

segundobtn.addEventListener("click", imprimirMensagem);

//removendo evento
const terceiro_btn = document.querySelector("#remove-evento");

terceiro_btn.addEventListener('click', () => {
    console.log('Evento removido');
    segundobtn.removeEventListener('click', imprimirMensagem)
});
// Capturando o elemento
const meu_titulo = document.querySelector("#meutitulo");

// Adicionando o evento corretamente (usando PONTO, não IGUAL)
meu_titulo.addEventListener('click', (e) => {
    // 'e' é o nosso objeto do evento
    console.log(e);
    
    // Pegando a posição X do clique (Corrigido para offsetX)
    console.log(e.offsetX);
});

//evento focus
const input = document.querySelector("#meu-input");

input.addEventListener("focus", (event) => {
console.log("Entrou no input");
});

//evento blur
input.addEventListener("blur", (event) => {
console.log("Saiu do input");
});

//load
window.addEventListener('load', () => {
    console.log('A página foi carregada!');
});

//beforeunload
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = ''; 
});

//Evento keydown
const campo = document.getElementById('campo');

campo.addEventListener('keydown', (e) => {
    console.log('keyDown:', e.key);
});

//Evento keyup
campo.addEventListener('keyup', (e) => {
    console.log('keyup:', e.key);
})

//pegando uma tecla especifica
campo.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log("Enter pressionado!");
    }
 })

 //outros eventos do mouse
 const eventos_mouse = document.querySelector('#mouse');

 //Mousedown
 eventos_mouse.addEventListener('mousedown', () => {
    console.log('Pressionou o botão');
 });

 //Mouseup
 eventos_mouse.addEventListener('mouseup', () => {
    console.log('Soltou o botão do mouse');
 });

//dbclick - duplo click no mouse (CORRIGIDO PARA dblclick)
 eventos_mouse.addEventListener('dblclick', () => {
    console.log('Duplo click');
 })





