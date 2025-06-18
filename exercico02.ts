export {};

interface Produto {
  nome: string;
  preco: number;
  garantia: boolean;
}

function mostrarproduto({ nome, preco, garantia }: Produto);
const produto: Produto = {
  nome: "Tenis nike",
  preco: 469.9,
  garantia: true,
};

console.log(produto);
