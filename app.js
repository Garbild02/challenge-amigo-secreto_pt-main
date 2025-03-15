//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Selecionando os elementos para (Campo de texto, Lista de nomes e o local onde sera mostrado o resultado)
const inputAmigo = document.getElementById('amigo'); 
const listaAmigos = document.getElementById('listaAmigos'); 
const resultado = document.getElementById('resultado');

// Criando uma lista vazia para guardar os nomes
const nomes = [];

//Função para adição dos nomes dos amigos
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); //// Remove os espaços vazioa

    // //Verificação se o campo foi inserido
    if (nome === '') {
        alert('Por favor, digite um nome.'); //Um alerta para informar o usuario que não deve deixar o campo em branco
        return; 
    }

    // Adiciona o nome à lista de nomes
    nomes.push(nome);

    // Criação de lista, Verificação se o texto foi digitado e inserção do item na lista do html
    const itemLista = document.createElement('li');
    itemLista.textContent = nome; 
    listaAmigos.appendChild(itemLista); 
    
    // Limpa o campo de texto e colocando o cursor novamente no campo
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Função para sortear amigo
function sortearAmigo(){
    if (nomes.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

//Sorteia um numero aleatorio, Pega o nome da pessoa que foi sorteada e exibe o resultado na tela
const indiceAleatorio = Math.floor(Math.random() * nomes.length);
const nomeSorteado = nomes[indiceAleatorio];
resultado.textContent = `O amigo secreto sorteado é: ${nomeSorteado}`;
}
