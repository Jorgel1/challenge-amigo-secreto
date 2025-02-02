//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];





function adicionarAmigo() {
    let amigo = document.querySelector('input');
    if(amigo.value == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
    }

}

function listarAmigos(listadeAmigos) {
    //listaAmigos.innerHT

    let listaOrdenada = document.getElementById('listaAmigos');

    listadeAmigos.forEach(amigo => {
        let li = document.createElement('li');
        listaOrdenada.appendChild(li);
    });
}