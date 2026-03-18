//DOM movimentando-se nele
console.log(document.body);

//Nodelist -- acessar a lista de nós filhos
console.log(document.body.childNodes);

//Acessando um elemento na posição da Nodelist
console.log(document.body.childNodes[1].childNodes);

//propriedade para acessar o elemento do titulo
console.log(document.body.childNodes[1].childNodes[1].textContent);

//selecionando por tags
const lista_de_itens = document.getElementsByTagName("li");
console.log(lista_de_itens);

//selecionando elemento por id
const titulo = document.getElementById("titulo");
console.log(titulo);

//selecionando elemento por classe
const produtos = document.getElementsByClassName('produtos')
console.log(produtos);

//insertBefore - inserir antes
const paragrafo = document.createElement('p');
const header = titulo.parentElement;
header.insertBefore(paragrafo, titulo);
const pegar_paragrado = document.getElementsByTagName('p');
console.log(pegar_paragrado)

//appendChild - adicionar um novo elemento no final
const navLinks = document.querySelector('nav ul');
const li = document.createElement('li');
navLinks.appendChild(li);

//replaceChild - substitui um filho existente por um novo fiho
const h2 = document.createElement('h2');
h2.textContent = 'Novo Titulo';
header.replaceChild(h2, titulo);

//criando no de texto
const meu_texto = document.createTextNode('Inserindo outro titulo');
console.log(meu_texto);
const h3 = document.createElement('h3');
h3.appendChild(meu_texto);
console.log(h3)


//substituindo
header.replaceChild(h3, h2);

//setAttribute e getAtiute
const primeiro_link = navLinks.querySelector('a');
console.log(primeiro_link);
primeiro_link.setAttribute('href', "https://www.uol.com.br/");

//pegando o link alerado
console.log(primeiro_link.getAttribute('target', 'blank'));

//altura e largura
const footer = document.querySelector('footer')
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);
console.log(footer.clientWidth);
console.log(footer.clientHeight);

//getClientBoudingRect - retângulo eliminador do conteudo visível
const produtos1 = produtos[0];
console.log(produtos1.getBoundingClientRect());

//css com js
const mainContainer = document.getElementById('main-container')
mainContainer.style.color = 'red';
mainContainer.style.backgroundColor = '#234';
mainContainer.style.paddingBotton = '100px';

//HTML Collection - fazendo um loop no li e alterando a cor de fundo
for (const li of lista_de_itens) {
    li.style.backgroundColor = 'Yellow';
}


