export function verificarParOuImpar() {
  let numero = parseInt(prompt("Digite um número:"));

  if (numero % 2 === 0) {
    alert(`O número ${numero} é PAR.`);
  } else {
    alert(`O número ${numero} é ÍMPAR.`);
  }
}