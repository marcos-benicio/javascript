export function calcularMediaPrompt() {
  // Entrada de dados
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let n3 = parseFloat(prompt("Digite o terceiro número:"));

  // Cálculo da média
  let media = (n1 + n2 + n3) / 3;

  // Exibe o resultado arredondado
  alert("A média arredondada é: " + Math.round(media));
}