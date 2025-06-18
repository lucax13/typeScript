"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulos_1 = require("./modulos");
const bandas = ["Dejavu", "Calcinha preta", "Limão com mel"];
bandas.push("Nightwish");
console.log(bandas);
const artistas = ["Dfideliz", "Djonga", "Kyan"];
artistas.push("ne-yo");
console.log(artistas);
(0, modulos_1.separador)();
const pessoas = ["luan", 23, "pietra", 55];
console.log(pessoas);
(0, modulos_1.separador)();
const linguagens = [
    ["JS", "TS"],
    ["HTML", "CSS", "Bootstrap"],
];
console.log(linguagens[0][0]);
console.log(linguagens[1][0]);
(0, modulos_1.separador)();
const numeros = [10, 40, 89, 700];
const total = numeros.reduce((acumulador, valor) => {
    return acumulador + valor;
}, 0);
console.log(total);
