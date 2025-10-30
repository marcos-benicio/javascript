export function verificarMaioridade() {
  let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    alert(`Você tem ${idade} anos — é MAIOR de idade.`);
  } else {
    alert(`Você tem ${idade} anos — é MENOR de idade.`);
  }
}