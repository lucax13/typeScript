import { separador } from "./modulos";

export {};

const bandas: Array<string> = ["Dejavu", "Calcinha preta", "Limão com mel"];
bandas.push("Nightwish");
console.log(bandas);

const artistas: string[] = ["Dfideliz", "Djonga", "Kyan"];
artistas.push("ne-yo");
console.log(artistas);

separador();

const pessoas: (string | number)[] = ["luan", 23, "pietra", 55];
console.log(pessoas);

separador();

const linguagens: string[][] = [
  ["JS", "TS"],
  ["HTML", "CSS", "Bootstrap"],
];

console.log(linguagens[0][0]);
console.log(linguagens[1][0]);

separador();

const numeros: number[] = [10, 40, 89, 700];
const total = numeros.reduce((acumulador: number, valor: number) => {
  return acumulador + valor;
}, 0);

console.log(total);
