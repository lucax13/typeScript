export {};

interface Produto {
  nome: string;
  preco: number;
  garantia: boolean;
}

const produto: Produto = {
  nome: "Tenis nike",
  preco: 469.9,
  garantia: true,
};

console.log(produto);
