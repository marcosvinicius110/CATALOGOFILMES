const filmes = [{
    título: "Vingadores",
    imagem: https://image.tmdb.org/t/p/w500"/6ELCZlTA5lGUops70hKdB83WJxH.jpg"
    descricao: "Os maiores heróis da terra unidos.",
},
{
    título "Batman",
    imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O cavaleiro das trevas,"
},
{
    título: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "O amigo da vizinhança",
}
]

 const listafilmes = document.getElementById("listarFilmes");
 
 function mostrarFilmes(Lista) {
    listafilmes.innerHTML = ""
    Lista.array.forEach(filme => {
       listarFilmes.innerHTML += `
       <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${filme.título}</h3>
                <p>${filme.descricao}</p>
                <button class="btn-dark" onclick="verDetalhes('${filme.título}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarFilmes(filmes)
function verDetalhes(título) {
    Swal.fire({
        títle: título,
        Text: "Mais informações do filme",
        icon: "info"
    })
}