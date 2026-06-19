async function carregarFilmes() {
    const resposta = await fetch("https://localhost:5000/filmes")
    const filmes = await resposta.json()
    mostrarFilmes(filmes)
}
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

carregarFilmes(filmes)

function verDetalhes(titulo) {
    Swal.fire({
        títle: titulo,
        Text: "Mais informações do filme",
        icon: "info"
    })
}