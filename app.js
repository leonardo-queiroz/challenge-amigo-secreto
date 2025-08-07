// Criação de um array para armazenar os amigos que vão sendo adicionados.
let arrayAmigos = [];

// Função para adicionar amigos ao array e atualizar a lista da página quando o botão "Adicionar" for pressionado.
function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let lista = document.getElementById("listaAmigos")
    
    let novoAmigo = document.createElement("li");
    
    if(amigo.value == "") {
        alert("Por favor, digite um nome válido.")
    } else if(arrayAmigos.includes(amigo.value)) {        
        alert("O nome digitado já está na lista.");
    } else {
        arrayAmigos.push(amigo.value);    
        novoAmigo.textContent = amigo.value;
        lista.appendChild(novoAmigo);
    
        amigo.value = "";
    }
}

// Função responsável por sortear aleatoriamente um dos amigos ao pressionar o botão "Sortear" e desativar os botões após o uso.
function sortearAmigo() {
    let indexAleatorio = Math.floor(Math.random() * arrayAmigos.length);
    
    let resultado = document.getElementById("resultado");
    
    let botaoAdicionar = document.querySelector(".button-add");
    let botaoSortear = document.querySelector(".button-draw");
    
    let amigoSecreto = document.createElement("li");
    amigoSecreto.textContent = `Seu amigo secreto é: ${arrayAmigos[indexAleatorio]}`;
    resultado.appendChild(amigoSecreto);

    botaoAdicionar.disabled = true;
    botaoSortear.disabled = true;
}