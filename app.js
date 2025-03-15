//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Selecionando os elementos para (Campo de texto, Lista de nomes e o local onde sera mostrado o resultado)
const inputAmigo = document.getElementById('amigo'); // Campo de texto para o nome
const listaAmigos = document.getElementById('listaAmigos'); // Lista de nomes
const resultado = document.getElementById('resultado'); // Local onde aparecerá o sorteado

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
