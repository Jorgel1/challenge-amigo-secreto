//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//let amigos = [];
//let li = document.createElement('li');
//let listaOrdenada = document.getElementById('listaAmigos');


//function adicionarAmigo() {
//    let amigo = document.querySelector('input');
//    if (amigo.value == '') {
//        alert('Por favor, insira um nome.');
//    } else {
//        amigos.push(amigo.value);
//        amigo.value = '';
//        mostrarLista(amigos);
//    }

//};

//function mostrarLista(listadeAmigos) {
//    li.innerHTML = '';

//    listadeAmigos.forEach(amigo => {
//        let paragrafo = document.createElement('p');
//        paragrafo.innerHTML = amigo;
//        li.appendChild(paragrafo);
//        listaOrdenada.appendChild(li);
//    });
//};

//function sortearAmigo() {
//    if (amigos.length > 0) {
//        li.innerHTML = '';
//        let amigoSorteado = Math.floor(Math.random() * amigos.length);

//        let paragrafo = document.createElement('p');
//        paragrafo.innerHTML = amigos[amigoSorteado];
//        li.appendChild(paragrafo);
//        listaOrdenada.appendChild(li);
//    }
//};

//versão do professor

let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (!nomeAmigo) {
        alert("Digite o nome do amigo");
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista();
}

function atualizarlista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo adicionado");
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

    let limparLista = document.getElementById("listaAmigos");
    limparLista.innerHTML = "";
    amigos = [];
}