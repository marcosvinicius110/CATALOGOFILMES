const filmes = [{
    titulo: "Vingadores",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/7D2DosFWqmNc0vfZJPqwY5uIvsR.jpg",
    descricao: "Os maiores heróis da terra unidos.",
},
{
    titulo: "Batman",
    imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O cavaleiro das trevas,"
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança",
},
{
    titulo: "Doutor Estranho",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/pb4clPWRJ5AKlSFu1HrrHdt5uAw.jpg",
    descricao: "O mago do universo Marvel"
},
{
    titulo: "Interestelar",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
    descricao: "Um viajante no tempo"
},
{
    titulo: "Velozes e furiosos desafio em Tóquio",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1kzW2GImY1YVmLRx3NLhXFBfLLO.jpg",
    descricao: "Uma série de carros de corrida"
}
]

 const listarFilmes = document.getElementById("listarFilmes");
 
 function mostrarFilmes(lista) {
    listarFilmes.innerHTML = ""
    lista.forEach(filme => {
       listarFilmes.innerHTML += `
       <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${filme.titulo}</h3>
                <p>${filme.descricao}</p>
                <button class="btn-dark text-white" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        títle: titulo,
        Text: "Mais informações do filme",
        icon: "info"
    })
}