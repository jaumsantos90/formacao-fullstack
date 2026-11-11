const vendas = [150, 800, 320, 1200, 450, 90, 600, 250, 980, 110];

const meta = 10000;

let faturamentoAcumulado = 0;
let contador = 0;

while(faturamentoAcumulado < meta && contador < vendas.length) {
    faturamentoAcumulado += vendas[contador];
    contador++;
}

console.log("===== META DE FATURAMENTO =====");
console.log("Meta estabelecida: R$ " + meta.toFixed(2));
console.log("Vendas necessárias: " + contador);
console.log("Faturamento acumulado: R$ " + faturamentoAcumulado.toFixed(2));
console.log("Meta atingida: " + (faturamentoAcumulado >= meta ? "Sim" : "Não"));