export {};

let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Moedas";

console.log(`${nome} tem ${idade} anos.`);

idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`status: ${ativo ? "Ativo" : "inativo"}`);
