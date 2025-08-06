let arrayAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let lista = document.getElementById("listaAmigos")
    let novoAmigo = document.createElement("li");
    
    arrayAmigos.push(amigo.value);    
    novoAmigo.textContent = amigo.value;
    lista.appendChild(novoAmigo);

    amigo.value = "";
}