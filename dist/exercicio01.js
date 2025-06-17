"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function exibirCor(nome, cor) {
    if (cor) {
        return `Ola ${nome} sua cor preferida ${cor}`;
    }
    return `Ola ${nome} o que você quer?`;
}
console.log(exibirCor("lucas", "preto"));
console.log("lucas");
