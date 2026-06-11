const séries = [{
    titulo: "Peaky Blinders",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/i0uajcHH9yogXMfDHpOXexIukG9.jpg",
    descricao: "Série britânica sobre uma família de gangsters em Birmingham."
},
{
    titulo: "flash",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg",
    descricao: "Série sobre um super-herói que viaja no tempo."
},
{
    titulo: "narcos",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/zzz1KiXWqr8SvqiAb1NmFtnV7Uu.jpg",
    descricao: "Série sobre o tráfico de drogas no Colômbia."
}, 
{
    titulo: "the walking dead",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg",
    descricao: "Série sobre um grupo de sobreviventes em um mundo pós-apocalíptico."
}, 
]

 const listaSéries = document.getElementById("listaSéries");
 
 function mostrarSéries(lista) {
    listaSéries.innerHTML = ""
    lista.forEach(série => {
       listaSéries.innerHTML += `
       <div class="col-md-4">
            <div class="card card-série h-100">
            <img src="${série.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${série.titulo}</h3>
                <p>${série.descricao}</p>
                <button class="btn-dark text-white" onclick="verDetalhes('${série.titulo}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarSéries(séries)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da série",
        icon: "info"
    })
}