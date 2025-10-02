const jogos = ["minecraft", "God of War" , "limbo", "ghost of tsushima" ];
  
console.log("o segundo jogo é:" , jogos[1]);

console.log("o array ten" , jogos.length, "jogos.");

jogos.push("mario");
console.log("o array agora e")

console.log("\nLista de jogos:");
for (let i = 0; i < jogos.length; i++) {
    console.log(jogos[i]);
}