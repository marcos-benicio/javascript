export function verificarMultiplos() {
  let n1 = parseInt(prompt("Digite o primeiro número:"));
  let n2 = parseInt(prompt("Digite o segundo número:"));

  if (n1 % n2 === 0 || n2 % n1 === 0) {
    alert("Pelo menos um dos números é múltiplo do outro ✅");
  } else {
    alert("Nenhum dos números é múltiplo do outro ❌");
  }
}