export function testarEscopo() {
  let globalVar = "Sou uma variável global";
  let localVar = "Sou uma variável local";
  console.log(globalVar); // acessível
  console.log(localVar);  // acessível aqui
}

testarEscopo();
console.log(globalVar); // acessível fora da função
// console.log(localVar); // ❌ erro: localVar não é definida fora da função