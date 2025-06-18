"use strict";
/*enums são maneira de definir  um conjnto de constantes nomeados.  */
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Domingo"] = "Domingo";
    DiasDaSemana["Segunda"] = "Segunda-feira";
    DiasDaSemana["Ter\u00E7a"] = "Ter\u00E7a-feira";
    DiasDaSemana["Quarta"] = "Quarta-feira";
})(DiasDaSemana || (DiasDaSemana = {}));
const diaAtual = DiasDaSemana.Quarta;
console.log(diaAtual);
