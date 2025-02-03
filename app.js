//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let li = document.createElement('li');
let listaOrdenada = document.getElementById('listaAmigos');


function adicionarAmigo() {
    let amigo = document.querySelector('input');
    if (amigo.value == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        mostrarLista(amigos);
    }

};

function mostrarLista(listadeAmigos) {
    li.innerHTML = '';

    listadeAmigos.forEach(amigo => {
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = amigo;
        li.appendChild(paragrafo);
        listaOrdenada.appendChild(li);
    });
};

function sortearAmigo() {
    if (amigos.length > 0) {
        li.innerHTML = '';
        let amigoSorteado = Math.floor(Math.random() * amigos.length);

        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = amigos[amigoSorteado];
        li.appendChild(paragrafo);
        listaOrdenada.appendChild(li);
    }
};