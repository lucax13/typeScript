import { separador } from "./modulos";

//03-funcoes.ts
export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("lucas"));

separador();

function saudacaoCompleta(nome: string, curso?: string) {
  if (curso) {
    return `Olá ${nome}, você está estudando ${curso}`;
  }
  return `ola ${nome}, sei lá o que você está fazendo..`;
}

console.log(saudacaoCompleta("maycom noia", "TypeScript"));
console.log(saudacaoCompleta("Paulo"));
