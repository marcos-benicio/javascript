// 5) Módulo de banco de usuários
export const userDB = `
--- userDB.js ---
const users = [];

export function addUser(user) {
  users.push(user);
}

--- main.js ---
import { addUser } from './userDB.js';
addUser({ nome: "Ana", email: "ana@email.com" });
`;