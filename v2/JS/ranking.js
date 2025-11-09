const topJogos = [
    {
        titulo: "Hollow Knight: Silksong",
        publisher: "Team Cherry",
        genero: "Metroidvania",
        posicao: 1,
        nota: "9.8/10",
        imagem: "../Images/silksong2.jpg",
        descricao: "Jogo metroidvania 2D, sequência de Hollow Knight. O jogador controla Hornet, capturada e levada ao reino estranho de Pharloom. Tem exploração extensa, combate ágil, inimigos e chefes desafiadores, e muitas sidequests."
    },
    {
        titulo: "Borderlands 4",
        publisher: "Gearbox",
        genero: "FPS RPG",
        posicao: 2,
        nota: "9.6/10",
        imagem: "../Images/borderlands2.jpg",
        descricao: "Continua como um looter-shooter com classes diferentes, armas variadas e o humor característico da série. Busca recuperar o 'sabor' original da franquia."
    },
    {
        titulo: "Dying Light: The Beast",
        publisher: "Techland",
        genero: "Ação/Horror",
        posicao: 3,
        nota: "9.5/10",
        imagem: "../Images/dying.jpg",
        descricao: "Retorno de Kyle Crane, 13 anos após os eventos anteriores. Combate corpo a corpo, parkour, elementos de horror/survival e mundo aberto. Introduz o 'Beast Mode'."
    },
    {
        titulo: "Final Fantasy XVII",
        publisher: "Square Enix",
        genero: "RPG",
        posicao: 4,
        nota: "9.4/10",
        imagem: "../Images/ff14.jpg",
        descricao: "Sem muitas informações oficiais, mas deve seguir a tradição de RPGs de grande escala da série Final Fantasy."
    },
    {
        titulo: "Elder Scrolls VI",
        publisher: "Bethesda",
        genero: "RPG Mundo Aberto",
        posicao: 5,
        nota: "9.4/10",
        imagem: "../Images/tes6.jpg",
        descricao: "RPG de mundo aberto ambientado em Tamriel, com exploração, facções, magia e combates. Ainda sem muitos detalhes revelados."
    },
    {
        titulo: "Cyberpunk 2077: Rebirth",
        publisher: "CD Projekt Red",
        genero: "RPG Futurista",
        posicao: 6,
        nota: "9.1/10",
        imagem: "../Images/cp2077.jpg",
        descricao: "Continuação/expansão de Cyberpunk 2077. O subtítulo 'Rebirth' sugere um renascimento da franquia."
    },
    {
        titulo: "GTA VI",
        publisher: "Rockstar Games",
        genero: "Ação/Mundo Aberto",
        posicao: 7,
        nota: "8.9/10",
        imagem: "../Images/gta6.jpg",
        descricao: "Provável ambientação em Vice City, mundo aberto gigante, narrativa cinematográfica e múltiplos protagonistas."
    },
    {
        titulo: "Overwatch 3",
        publisher: "Blizzard",
        genero: "FPS Competitivo",
        posicao: 8,
        nota: "8.8/10",
        imagem: "../Images/overwatch-3.jpg",
        descricao: "Continuação do combate em equipe com heróis e habilidades distintas, novos modos e melhorias de balanceamento."
    },
    {
        titulo: "Monster Hunter: Eclipse",
        publisher: "Capcom",
        genero: "Ação/Aventura",
        posicao: 9,
        nota: "8.8/10",
        imagem: "../Images/mh.jpg",
        descricao: "Mantém a fórmula da série: caçar monstros gigantes, coletar recursos e fabricar equipamentos. Cooperação multiplayer esperada."
    },
    {
        titulo: "The Legend of Zelda: Echoes of Time",
        publisher: "Nintendo",
        genero: "Aventura",
        posicao: 10,
        nota: "8.6/10",
        imagem: "../Images/zelda.jpg",
        descricao: "Rumores indicam uma aventura épica com exploração, puzzles e elementos de viagem no tempo, seguindo o estilo clássico de Zelda."
    }
];

function gerarRanking() {
    const container = document.querySelector(".cards");
    container.innerHTML = "";

    topJogos.forEach((jogo) => {
        const card = document.createElement("section");
        card.classList.add("card");

        card.innerHTML = `
      <div class="card__img">
        <img src="${jogo.imagem}" alt="${jogo.titulo}">
      </div>
      <div class="card__body">
        <div class="card__meta">
          <div class="card__info">
            <h3 class="card__titulo">${jogo.titulo}</h3>
            <div class="card__publisher">${jogo.publisher}</div>
            <div class="card__genero">${jogo.genero}</div>
          </div>
          <div class="card__posicao ${jogo.posicao <= 3 ? `top${jogo.posicao}` : ""}">
            ${jogo.posicao <= 3 ? `<i class="fa-solid fa-medal"></i>` : ""}#${jogo.posicao}
          </div>
        </div>
        <div class="card__nota">
          <i class="fa-solid fa-star" style="margin-right: 0.2rem"></i>${jogo.nota}
        </div>
        <hr>
        <div class="card__detalhes">
          <span>
            <i class="fa-solid fa-circle-info" style="margin-right: 0.5rem"></i>${jogo.descricao}
          </span>
        </div>
      </div>
    `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", gerarRanking);
