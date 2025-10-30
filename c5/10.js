export function mostrarPares() {
  let numero = parseInt(prompt("Digite um número positivo:"));
  let i = 0;
  let pares = "";

  while (i <= numero) {
    if (i % 2 === 0) {
      pares += i + " ";
    }
    i++;
  }

  alert(`Números pares até ${numero}:\n${pares}`);
}