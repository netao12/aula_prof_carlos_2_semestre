const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", calcular);

function calcular(){

    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado");

    if(isNaN(n1) || isNaN(n2)){
        resultado.innerHTML = "Digite dois números válidos.";
        return;
    }

    let soma = n1 + n2;
    let media = soma / 2;
    let produto = n1 * n2;
    let maior = Math.max(n1,n2);
    let menor = Math.min(n1,n2);

    resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Média: ${media}</p>
    <p>Produto: ${produto}</p>
    <p>Maior número: ${maior}</p>
    <p>Menor número: ${menor}</p>
    `;
}