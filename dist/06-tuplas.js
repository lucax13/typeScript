"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*tuplas
É um tipo de array especial usada quando precisamos armazenar um con junto fixo
de elementos de tipos diferentes*/
const usuario = ["lucas", 17, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
usuario[1] = 30;
console.log(usuario[1] + "anos.");
