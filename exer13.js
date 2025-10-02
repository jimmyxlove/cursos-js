// Array de faturamento diario da semana
const faturamentoDiario = [1500, 2200, 1800, 3100, 2500, 4000, 3500];
// Array con os nomes dos dias da semana
const diasDaSemana
['Segunda-feira',
'Terca-feira', 'Quarta-feira',
'Quinta-feira',
'Sexta-feira',
'Sabado',
'Domingo'];
Calcular o faturaments total da senana
Ist faturamentoTotal = 0;
for (let i = 0; i < faturamentoDiario.length; i++) { 
faturamentoTotal faturamentoDiario[i]; }

console.log(Faturamento total da semana: R$ ${faturamentoTotal.toFixed(2)});
// 2. Identificar o maior faturamento e o dia em que ocorreu
let maiorFaturamento = 0;
let diaComMaiorFaturamento = "";

for (let i = 0 i < faturamentoDiario.length; i++) {
if (faturamentoDiario [i] > maiorFaturamento) {
faturamentoDiario[i]; maiorFaturamento
diaComMaiorFaturamento = diasDaSemana[i];
}
}
console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)} na ${diaComMaiorFaturamento }`);

const mediaFaturamento = faturamentoTotal / faturamentoDiario.length;
onsole.log(`Mécdia de faturamento diário: R$ ${mediaFaturamento.toFixed(2)}`);
