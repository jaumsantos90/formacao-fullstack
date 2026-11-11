const vendas = [150, 800, 320, 1200, 450, 90, 600, 250, 980, 110];

let faturamentoTotal = 0;
let vendasAcima500 = 0;
let maiorVenda = 0;
let mediaVendas = 0;
let classificacao = "";

for(let i = 0; i < vendas.length; i++) {
    faturamentoTotal += vendas[i];
    if(vendas[i] > 500) {
        vendasAcima500++;
    }
    if(vendas[i] > maiorVenda) {
        maiorVenda = vendas[i];
    }
}

mediaVendas = faturamentoTotal / vendas.length;

let contador = 0;
do{
    if(vendas[contador] < 200) {
        classificacao = "Baixa";
    }else if(vendas[contador] >= 200 && vendas[contador] <= 500) {
        classificacao = "Média";
    }else {
        classificacao = "Alta";
    }
    console.log("Venda "+ (contador + 1) + ": R$ "+ vendas[contador].toFixed(2) + " - " + classificacao);
    contador++;
}while(contador < vendas.length);

console.log("===== RELATÓRIO DE VENDAS =====");
console.log("Quantidade de vendas: "+vendas.length);
console.log("Faturamento total: R$ "+faturamentoTotal.toFixed(2));
console.log("Vendas acima de R$ 500: "+vendasAcima500);
console.log("Maior venda: R$ "+maiorVenda.toFixed(2));
console.log("Média de vendas: R$ "+mediaVendas.toFixed(2));
