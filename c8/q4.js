// 4) ES Modules — módulo matemático com 1 função
export const esmMath = `
--- math.mjs ---
export function soma(a, b) { return a + b; }

--- main.mjs ---
import { soma } from './math.mjs';
console.log(soma(2, 3));
`;
