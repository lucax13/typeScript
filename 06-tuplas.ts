import { separador } from "./modulos";

export {};

/*tuplas
É um tipo de array especial usada quando precisamos armazenar um con junto fixo 
de elementos de tipos diferentes*/

const usuario: [string, number, boolean] = ["lucas", 17, true];

console.log(usuario[0]);
console.log(usuario[1] + " anos");
console.log(usuario[2] ? "ativo" : "inativo");

usuario[1] = 30;
console.log(usuario[1] + "anos.");

separador();

type Produto = [string, number];

const produtoA: Produto = ["Bermuda", 23.89];
//const produtoB:  = [89, "camiseta"]
const produtoC: Produto = ["iphone", 1000];

console.log(produtoA);
console.log(produtoC);

separador();

function verificarOperacao(sucesso: boolean) {
  if (sucesso) {
    return [200, "Operação realizada com sucesso!"];
  }
  return [500, "Erro inesperao no servidor"];
}

let resultadoDaOperacao = verificarOperacao(false);
console.log(resultadoDaOperacao);
