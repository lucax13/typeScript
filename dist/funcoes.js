"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("lucas"));
(0, modulos_1.separador)();
function saudacaoCompleta(nome, curso) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}`;
    }
    return `ola ${nome}, sei lá o que você está fazendo..`;
}
console.log(saudacaoCompleta("maycom noia", "TypeScript"));
console.log(saudacaoCompleta("Paulo"));
