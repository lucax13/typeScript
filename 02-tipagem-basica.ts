import { separador } from "./modulos";

export {};

let idade: number = 30;
let ativo: boolean = true;
let nome: string = "Moedas";

console.log(`${nome} tem ${idade} anos.`);

idade = 31;
console.log(`${nome} agora tem ${idade} anos.`);
console.log(`status: ${ativo ? "Ativo" : "inativo"}`);

separador();

let qualquerCoisa: any = "Pode ser qualquer coisa";
qualquerCoisa = 10;
qualquerCoisa = true;

console.log(`Qualquer coisa: ${qualquerCoisa}`);

/*sobre tipagem implicita ou por inferencia*/
let exemplo1 = "isso é uma string"; //ts infere que é string
let exemplo2 = 10; //ts infere que é number
let exemplo3; // neste caso, não tem como ts inferir em nada
let exemplo4: string;
