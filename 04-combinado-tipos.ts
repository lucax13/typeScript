import { separador } from "./modulos";

//04-combinando-tipos.ts
export {};

let direcao: "esquerda" | "direita";
direcao = "esquerda";
console.log(direcao);

direcao = "direita";
console.log(direcao);

separador();

type NumberOuTexto = number | string;
let exemploA: NumberOuTexto = 1755;
let exemploB: NumberOuTexto = "Senac";
console.log("Exemplo A: " + exemploA);
console.log("ExmploB: " + exemploB);

separador();

type Status = "ativo" | "inativo" | "pendente";
let situacaoAluno1: Status = "ativo";
let situacaoAluno2: Status = "pendente";
let situacaoAluno3: Status = "inativo";

console.log("Situação 1:" + situacaoAluno1);
console.log("Situação 2:" + situacaoAluno2);
console.log("Situação 3:" + situacaoAluno3);

separador();

type DiasDaSemana =
  | "Domingo"
  | "Segunda-feira"
  | "Terça-feira"
  | "Quarta-feira";

const diaAtual: DiasDaSemana = "Quarta-feira";
console.log(diaAtual);
