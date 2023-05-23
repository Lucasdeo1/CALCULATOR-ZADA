const conteudo = document.getElementById('conteudo');

function append(valor) {
    if (conteudo.textContent === '0') {
            conteudo.textContent = valor;
    } else {
        conteudo.textContent += valor;
    }
}

function limpar() {
    conteudo.textContent = '0';
}

function calcular() {
    const conta = conteudo.textContent;
    const resposta = eval(conta);
    conteudo.textContent = resposta;
}