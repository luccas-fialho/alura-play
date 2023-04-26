import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
    const busca = await conectaApi.buscaVideo(dadosDePesquisa)

    const lista = document.querySelector('[data-lista]')

    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(elemento => {
        lista.appendChild(constroiCard(elemento))
    });
}

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]')

botaoPesquisa.addEventListener('click', evento => {
    buscarVideo(evento)
})
