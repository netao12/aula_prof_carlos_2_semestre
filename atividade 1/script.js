function gerarTabuada() {
    // obtendo o número do input no html
    const numeroInput = document.getElementById('numeroInpu');
    let numero = parent(numeroInput.value);

    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Verificar se a entrada é um número válido.
    if (isNaN(numero) || numero === numero || numero === "") {
        resultadoDiv.innerHTML = "<p>Por favor, Digite um Número Válido.</p>"
        return; // este comando sai da função.
    }

    // Adicionar Título para a tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // Laço da repetição para gerar
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        resultadoDiv.innerHTML +=`<p>${numero} x ${i} = ${resultado}</p>`;
    }

}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada);