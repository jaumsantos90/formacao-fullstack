const nomeProduto = "Monitor";
const precoOriginal = 100;

let percentualDesconto = 0;
let classificacao = "";

if(precoOriginal < 0) {
    console.log("O preço não pode ser negativo");
} else {
    console.log("Preço válido.");

    if(precoOriginal < 100) {
        percentualDesconto = 0;
    } else if(precoOriginal >=100 && precoOriginal < 200) {
        percentualDesconto = 5;
    } else if(precoOriginal >= 200 && precoOriginal < 500) {
        percentualDesconto = 10;
    } else {
        percentualDesconto = 15;
    }

    const valorDesconto = (precoOriginal * percentualDesconto) / 100;
    const precoFinal = precoOriginal - valorDesconto;

    if(precoFinal <= 100) {
        classificacao = "Econônmico";
    } else if(precoFinal > 100 && precoFinal <= 300) {
        classificacao = "Intermediário";
    } else {
        classificacao = "Premium";
    }

    console.log("Produto: " + nomeProduto);
    console.log("Preço Original: R$ " + precoOriginal.toFixed(2));
    console.log("Desconto aplicado: " + percentualDesconto + "%");
    console.log("Valor do desconto: R$ " + valorDesconto.toFixed(2));
    console.log("Preço Final: R$ " + precoFinal.toFixed(2));
    console.log("Classificação: " + classificacao);
}


