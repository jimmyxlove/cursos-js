const notas = {
    primeirobimestre: 7.5,
    Segundobimestre: 8.0,
    terceiroBimestre: 6.5,
    quartoBimestre: 9.0

};

function calcularmedia (notasbimestrais) {
    const somanotas = notasbimestrais.primeirobimestre +
    notasbimestrais.Segundobimestre +
    notasbimestrais.terceiroBimestre +
    notasbimestrais.quartoBimestre;
    const media = somanotas /4;
    return media;
}

function exibirboletim (notasAunos) {
    const mediafinal = calcularmedia (notasAunos);
}

console.log("---boletim escolar ---")
console.log('notas:');
console.log(`  1º bimestre: ${notasaluno.primeirobimestre}`);
console.log(`  1º bimestre: ${notasaluno.Segundobimestre}`);
console.log(`  1º bimestre: ${notasaluno.terceiroBimestre}`);
console.log(`  1º bimestre: ${notasaluno.quartoBimestre}`);
console.log("----------------------");
console.log(`media final: ${mediafinal.tofixed(2)}`);
console.log("-------------------");

if (mediafinal >= 7.0) {
    console.log{"status: aluno aprovado!"};
  else {
        console.log{"status: Estudar mais!"};
    } 
}
exibirboletim(notas);
    
