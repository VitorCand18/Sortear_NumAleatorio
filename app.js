function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    
    if (!quantidade || !de || !ate) {
        alert("Preencha todos os campos, por favor.");
        return; // Se algum campo estiver vazio, a função é interrompida.
    }

    if (ate < de) {
        alert("O valor 'Até' não pode ser menor que o valor 'De'.");
        document.getElementById("ate").value = '';
        return; // Interrompe a execução se o intervalo for inválido.
    }

    let distanciaEntreNumeros = ate - de + 1; // Soma +1 para incluir o valor "ate"
    
    if (quantidade > distanciaEntreNumeros) {
        alert("O número de sorteios é maior do que o número de opções disponíveis no intervalo.");
        document.getElementById("quantidade").value = '';
        return; // Interrompe a execução do sorteio
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        // Se o número já foi sorteado, tenta novamente
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label id="numeroSorteado" class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    
    // Após o sorteio, habilitar o botão de reiniciar
    alterarStatusBotao(true);
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Habilitar ou desabilitar o botão de reiniciar, baseado no estado do sorteio.
function alterarStatusBotao(estado) {
    let botao = document.getElementById('btn-reiniciar');
    
    if (estado) {
        // Se sorteio ocorreu, habilita o botão de reiniciar.
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        // Se não houver sorteio, desabilita o botão de reiniciar.
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

// Função de reiniciar que limpa os campos e desabilita o botão de reiniciar.
function reiniciar(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = `<label id="numeroSorteado" class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    // Desabilitar o botão de reiniciar ao reiniciar os campos
    alterarStatusBotao(false);
}
