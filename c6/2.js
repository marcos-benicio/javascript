export function calcularMediaPrompt() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let n3 = parseFloat(prompt("Digite o terceiro número:"));

  let media = (n1 + n2 + n3) / 3;

  alert("A média é: " + Math.round(media));
}