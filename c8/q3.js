
// 3) CommonJS — módulo matemático com 1 função
export const commonjsMath = `
--- math.js ---
function soma(a, b) { return a + b; }
module.exports = { soma };

--- main.js ---
const { soma } = require('./math');
console.log(soma(2, 3));
`;
