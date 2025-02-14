function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++){

        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){ // .includes devolve um booleano se for true avança se for false repete o laço.
            numero = obterNumeroAleatorio(de, ate)
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label id="numeroSorteado" class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}