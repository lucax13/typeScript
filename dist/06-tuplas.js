"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
/*tuplas
É um tipo de array especial usada quando precisamos armazenar um con junto fixo
de elementos de tipos diferentes*/
const usuario = ["lucas", 17, true];
console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");
usuario[1] = 30;
console.log(usuario[1] + "anos.");
(0, modulos_1.separador)();
const produtoA = ["Bermuda", 23.89];
//const produtoB:  = [89, "camiseta"]
const produtoC = ["iphone", 1000];
console.log(produtoA);
console.log(produtoC);
(0, modulos_1.separador)();
function verificarOperacao(sucesso) {
    if (sucesso) {
        return [200, "Operação realizada com sucesso!"];
    }
    return [500, "Erro inesperao no servidor"];
}
const [resultadoDaOperacao, situcao] = verificarOperacao(true);
console.log(resultadoDaOperacao, situcao);
