/*enums são maneira de definir  um conjnto de constantes nomeados.  */

enum DiasDaSemana {
  Domingo = "Domingo",
  Segunda = "Segunda-feira",
  Terça = "Terça-feira",
  Quarta = "Quarta-feira",
}

const diaAtual: DiasDaSemana = DiasDaSemana.Quarta;
console.log(diaAtual);
