"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
let idade = 30;
let ativo = true;
let nome = "Moedas";
console.log(`${nome} tem ${idade} anos.`);
idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`status: ${ativo ? "Ativo" : "inativo"}`);
(0, modulos_1.separador)();
let qualquerCoisa = "Pode ser qualquer coisa";
qualquerCoisa = 10;
qualquerCoisa = true;
console.log(`Qualquer coisa: ${qualquerCoisa}`);
/*sobre tipagem implicita ou por inferencia*/
let exemplo1 = "isso é uma string"; //ts infere que é string
let exemplo2 = 10; //ts infere que é number
let exemplo3; // neste caso, não tem como ts inferir em nada
let exemplo4;
