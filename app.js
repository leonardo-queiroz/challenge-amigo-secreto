// Criação de um array para armazenar os amigos que forem adicionados.
let arrayAmigos = [];

// Os elementos HTML são capturados e atribuídos a variáveis.
let amigoInput = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let botaoAdicionar = document.querySelector(".button-add");
let botaoSortear = document.querySelector(".button-draw");

// Função para adicionar amigos ao array e atualizar a lista da página quando o botão "Adicionar" for pressionado.
function adicionarAmigo() {    
    // Validação se o input foi preenchido e se o nome já está na lista.
    if(amigoInput.value == "") {
        alert("Por favor, digite um nome válido.");
    } else if(arrayAmigos.includes(amigoInput.value)) {        
        alert("O nome digitado já está na lista.");
    } else {
        // Cria um item de lista vazio e acrescenta o nome digitado ao array inicial.      
        let novoAmigo = document.createElement("li");
        arrayAmigos.push(amigoInput.value);        
        
        // Cria um novo elemento span contendo o nome que foi digitado.
        let nomeNovoAmigo = document.createElement("span");
        nomeNovoAmigo.textContent = amigoInput.value;
        
        // Cria um botão de remover ao lado de cada nome acrescentado na lista.
        let botaoRemover = document.createElement("button");
        botaoRemover.innerHTML = "&times";
        botaoRemover.classList.add("button-remove");
        botaoRemover.addEventListener('click', () => {
            let indexRemover = arrayAmigos.indexOf(nomeNovoAmigo.textContent);
            arrayAmigos.splice(indexRemover, 1);
            novoAmigo.remove();            
        });
        
        // Coloca o elemento span com o nome e o botão de remover juntos e os adiciona à lista exibida.
        novoAmigo.appendChild(nomeNovoAmigo);
        novoAmigo.appendChild(botaoRemover);
        lista.appendChild(novoAmigo);
        
        // Apaga o campo de input e mantém o cursor nele para facilitar a colocação do próximo nome.
        amigoInput.value = "";
        amigoInput.focus();
    }
}

// Função responsável por sortear aleatoriamente um dos amigos ao pressionar o botão "Sortear" e desativar os botões após o uso.
function sortearAmigo() {
    // Valida se a lista possui algum nome, caso contrário ela poderia sortear "undefined".
    if(arrayAmigos.length == 0) {
        alert("Você ainda não colocou nenhum nome na lista.");
        return;
    }    
    
    // Gera um número aleatório entre 0 e a quantidade total de nomes colocados na lista.
    let indexAleatorio = Math.floor(Math.random() * arrayAmigos.length);    
    
    // O número gerado é usado como index do array com os nomes para decidir quem foi sorteado como amigo secreto.
    let amigoSecreto = document.createElement("li");    
    amigoSecreto.textContent = `Seu amigo secreto é: ${arrayAmigos[indexAleatorio]}`;
    resultado.appendChild(amigoSecreto);

    // Desativa os botões de Adicionar e Sortear já que o sorteio foi concluído.
    botaoAdicionar.disabled = true;
    botaoSortear.disabled = true;
}