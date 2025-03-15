//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Selecionando os elementos para (Campo de texto, Lista de nomes e o local onde sera mostrado o resultado)
const inputAmigo = document.getElementById('amigo');
const ListadeAmigos = document.getElementById('listaAmigos');
const resultadoSorteio = document.getElementById('resultado');

//Lista vazia para pegar os nomes inseridos
const nomes = []

//Função para adição dos nomes dos amigos
function inserirAmigos(){
    const nome = inputAmigo.ariaValueMax.trim();// Remove os espaços vazioa

    //Verificação se o campo foi inserido
    if (nome === ''){
        alert(' Este campo não pode ser deixado em branco por favor, digite um nome');//Um alerta para informar o usuario que não deve deixar o campo em branco
        return;
    }

    //Inserir os nomes na lista
    nomes.push(nome);

    //Deixa a lista visivel na pagina
    const itemLista =  document.createElement('li');
    itemLista.textContent = nome;
    ListadeAmigos.appendChild(itemLista);

    //Limpando a caixa de texto
    inputAmigo.value = '';
    inputAmigo.focus();
}