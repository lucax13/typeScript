"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
function saudacao(nome) {
    return `Olá ${nome}!`;
}
console.log(saudacao("lucas"));
(0, modulos_1.separador)();
function saudacaoCompleta(nome, anoLetivo = 2025, curso) {
    if (curso) {
        return `Olá ${nome}, você está estudando ${curso}. no Ano ${anoLetivo}`;
    }
    return `ola ${nome}, sei lá o que você está fazendo.. ano: ${anoLetivo}`;
}
console.log(saudacaoCompleta("maycom noia", 9000));
console.log(saudacaoCompleta("Paulo"));
