export {};

interface Usuario {
  nome: string;
  idade: number;
  ativo: boolean;
  email?: string;
}

const usuarioA: Usuario = {
  nome: "João",
  idade: 26,
  ativo: true,
};

const usuarioB: Usuario = {
  nome: "Alana",
  idade: 17,
  ativo: false,
  email: "alana@gmail.com",
};

console.log(usuarioA);
console.log(usuarioB);
