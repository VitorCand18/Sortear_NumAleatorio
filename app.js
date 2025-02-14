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
        return; // Interrompe a execução se o intervalo for inválido.
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) { // Se o número já foi sorteado, tenta novamente.
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
