export function mostrarImpares() {
  let numero = parseInt(prompt("Digite um número positivo:"));
  let impares = "";

  for (let i = 1; i <= numero; i++) {
    if (i % 2 !== 0) {
      impares += i + " ";
    }
  }

  alert(`Números ímpares até ${numero}:\n${impares}`);
}