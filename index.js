// Função para classificar o elo
function classificarElo(nomeHeroi, xpHeroi) {
    let elo = "";

    if (xpHeroi < 1000) {
        elo = "Ferro";
    } else if (xpHeroi < 2000) {
        elo = "Bronze";
    } else if (xpHeroi < 3500) {
        elo = "Prata";
    } else if (xpHeroi < 5000) {
        elo = "Ouro";
    } else if (xpHeroi < 7000) {
        elo = "Platina";
    } else if (xpHeroi < 8500) {
        elo = "Esmeralda";
    } else if (xpHeroi < 10000) {
        elo = "Diamante";
    } else if (xpHeroi < 12000) {
        elo = "Mestre";
    } else {
        elo = "Desafiante";
    }

    return `O Herói de nome ${nomeHeroi} está no elo ${elo} (XP: ${xpHeroi})`;
}

// Lista de heróis com temática de animes
const herois = [
    { nome: "Spencer", xp: 8500 },
    { nome: "Killua Zoldyck", xp: 1200 },
    { nome: "Mikasa Ackerman", xp: 4500 },
    { nome: "Naruto Uzumaki", xp: Math.floor(Math.random() * 11000) + 1000 },
    { nome: "Monkey D. Luffy", xp: Math.floor(Math.random() * 11000) + 1000 },
    { nome: "Eren Yeager", xp: Math.floor(Math.random() * 11000) + 1000 },
    { nome: "Saitama", xp: Math.floor(Math.random() * 11000) + 1000 },
    { nome: "Edward Elric", xp: Math.floor(Math.random() * 11000) + 1000 },
    { nome: "Zaraki Kenpachi", xp: 15000 }
];

// Processando a lista
console.log("--- Ranking de Heróis (Edição Anime) ---");
herois.forEach(heroi => {
    console.log(classificarElo(heroi.nome, heroi.xp));
});