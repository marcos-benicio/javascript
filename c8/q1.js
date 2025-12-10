export function resposta1() {
  return `
1) Organização e legibilidade:
A modularização melhora a clareza do código ao dividir o sistema em arquivos menores, cada um com uma responsabilidade específica.
Exemplo: um módulo "auth.js" apenas para login, enquanto outro "db.js" apenas para acesso ao banco.

2) Reutilização de código:
Módulos podem ser usados em diferentes partes do sistema sem duplicar lógica.
Exemplo: um módulo "utils.js" com validações reutilizadas no cadastro e login.

3) Facilidade de manutenção e testes:
Como cada módulo é independente, corrigir um não afeta outros.
Exemplo: corrigir erro no módulo "emailService.js" sem mexer no restante do sistema.
`;
}