export {};

type Cor = "preto" | "vermelho" | "rosa" | "branco" | "azul";

function exibirCor(nome: string, cor?: Cor) {
  if (cor) {
    return `Ola ${nome} sua cor preferida ${cor}`;
  }
  return `Ola ${nome} o que você quer?`;
}

console.log(exibirCor("lucas", "preto"));
console.log("lucas");
