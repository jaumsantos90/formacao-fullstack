const nomeProduto = "Teclado Mecânico";
let precoProduto = 150.00;
const percentualDesconto = 20;

const desconto = (precoProduto * percentualDesconto) / 100;
const precoFinal = precoProduto - desconto;

console.log("Produto: " + nomeProduto);
console.log("Preço original: R$ " + precoProduto.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor do desconto: R$ " + desconto.toFixed(2));
console.log("Preço final: R$ " + precoFinal.toFixed(2));
console.log("Preço abaixo de R$100,00? " + (precoFinal < 100));
console.log("Desconto adicional de 10% aplicado? " + (precoFinal > 100 ? "Sim" : "Não"));
console.log("Preço final com desconto adicional: R$ " + (precoFinal > 100 ? (precoFinal * 0.9).toFixed(2) : precoFinal.toFixed(2)));
