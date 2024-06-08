let nome = "Eronixun ";
let xpHeroi = 8500;
let nivel = "";

if (xpHeroi < 1000) {
  nivel = "Ferro";
} else if (1001 <= xpHeroi && xpHeroi <= 2000) {
  nivel = "Bronze";
} else if (2001 <= xpHeroi && xpHeroi <= 5000) {
  nivel = "Prata";
} else if (5001 <= xpHeroi && xpHeroi <= 7000) {
  nivel = "Ouro";
} else if (7001 <= xpHeroi && xpHeroi <= 8000) {
  nivel = "Platina";
} else if (8001 <= xpHeroi && xpHeroi <= 9000) {
  nivel = "Imortal";
} else if (xpHeroi => 10001) {
  nivel = "Radiante";
}

console.log("O Herói de nome " + nome + "está no nível " + nivel);