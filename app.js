

let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nome);
    mostrarLista();
    limparCampo();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        exibirErro('Nenhum amigo cadastrado. Por favor, adicione pelo menos um amigo antes de sortear.');
        return;
    }
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
//Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
function limparCampo() {
     document.getElementById('amigo').value = '';
}
///// exibit mensagem de erro na tela quando o usuario tentar jogar sem ter amigos cadastrados
function exibirErro(mensagem) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensagem;
    resultado.style.color = 'red'; // Define a cor do texto como vermelho para indicar erro
}