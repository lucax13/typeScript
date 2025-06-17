import { separador } from "./modulos";

//03-funcoes.ts
export {};

function saudacao(nome: string): string {
  return `Olá ${nome}!`;
}

console.log(saudacao("lucas"));

separador();

function saudacaoCompleta(
  nome: string,
  anoLetivo: number = 2025,
  curso?: string
) {
  if (curso) {
    return `Olá ${nome}, você está estudando ${curso}. no Ano ${anoLetivo}`;
  }
  return `ola ${nome}, sei lá o que você está fazendo.. ano: ${anoLetivo}`;
}

console.log(saudacaoCompleta("maycom noia", 9000));
console.log(saudacaoCompleta("Paulo"));
