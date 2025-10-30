export function classificarTriangulo() {
  let a = parseFloat(prompt("Digite o valor do lado A:"));
  let b = parseFloat(prompt("Digite o valor do lado B:"));
  let c = parseFloat(prompt("Digite o valor do lado C:"));

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      alert("Triângulo Equilátero (todos os lados iguais).");
    } else if (a === b || a === c || b === c) {
      alert("Triângulo Isósceles (dois lados iguais).");
    } else {
      alert("Triângulo Escaleno (todos os lados diferentes).");
    }
  } else {
    alert("Os valores informados NÃO formam um triângulo válido.");
  }
}