const Animes = [{
    titulo: "Dragon Ball",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/kbkuYkaFsDwL6cyMgnBf77LczEo.jpg",
    descricao: "Dragon Ball é a lendária saga de Son Goku, um guerreiro alienígena que treina artes marciais e protege a Terra de ameaças espaciais enquanto busca as sete Esferas do Dragão.",
},
{
    titulo: "Hunter X Hunter",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/i2EEr2uBvRlAwJ8d8zTG2Y19mIa.jpg",
    descricao: "Gon parte em uma aventura para se tornar um caçador profissional que arrisca a própria vida em busca do desconhecido. Pelo caminho, ele conhece outros participantes da Prova dos Caçadores: Kurapika, Leorio e Killua. Será Gon capaz de vencer os grandes desafios da Prova de Caçadores e se tornar o melhor do mundo? ."
},
{
    titulo: "Demon Slayer: Kimetsu no Yaiba – To the Hashira Training",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/eQXWhYssiyQSuAZNjKe1g93cuge.jpg",
    descricao: " mostra Tanjiro se preparando para a batalha final contra Muzan Kibutsuji por meio de um treinamento intensivo e brutal com os Hashira, os espadachins mais poderosos da corporação.",
},
{
    titulo: "Attack On Titan",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/8aMqmB5xSblsZc7bLMEhE28yHa2.jpg",
    descricao: "Titãs estão quase exterminando a raça humana. Porém alguns estão dispostos a formar um exército de ataque aos seres assassinos. O jovem Eren, após ver sua mãe ser devorada por um titã, decide que não deixará nenhum deles vivo e buscará sua vingança completa."
},
{
    titulo: "Solo Leveling",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/uFmLbRL1LyHSgoGMI7hQ8bZ4Juf.jpg",
    descricao: "Solo Leveling acompanha Jinwoo, o caçador mais fraco da humanidade, que após quase morrer ganha a habilidade exclusiva de evoluir de nível como em um jogo, tornando-se o guerreiro mais poderoso do mundo."
},
{
    titulo: "Naruto Shippuden",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/nRJmByfK9XdtOY73VArcN8KpKVs.jpg",
    descricao: "Naruto Shippuden ocorre 2 anos e meio após Naruto ter deixado a vila para treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos shinobi's o superaram na classificação, e ele caiu para trás. No entanto, com apenas 6 meses para resgatar Sasuke, Naruto tem de enfrentar inimigos ainda mais perigosos. O plano da Akatsuki se revela lentamente e os perigos surgem mais do que nunca!"
}
]

 const listarAnimes = document.getElementById("listarAnimes");
 
 function mostrarAnimes(lista) {
    listarAnimes.innerHTML = ""
    lista.forEach(Animes => {
       listarAnimes.innerHTML += `
       <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${Animes.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${Animes.titulo}</h3>
                <p>${Animes.descricao}</p>
                <button class="btn-dark text-white" onclick="verDetalhes('${Animes.titulo}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarAnimes(Animes)
function verDetalhes(titulo) {
    Swal.fire({
        títle: titulo,
        Text: "Mais informações do Anime",
        icon: "info"
    })
}