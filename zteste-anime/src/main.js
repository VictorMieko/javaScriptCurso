import { setupSearchListener, setupAutoCompleteListener } from './modules/getAnime';
import { fetchAnime } from './modules/apiAnime';
import { setAnimeOnPage, renderSuggestion, hideSuggestion } from "./modules/renderer";

import './assets/css/style.css';

let debounceTimer;

async function renderAnime(query) {
    if(!query) return;

    hideSuggestion();
    const animes = await fetchAnime(query);

    if (!animes ||animes.length === 0) return;

    //animes.forEach(anime => {
    //   console.log(`🎬 ${anime.title} - Episódios: ${anime.episodes}`);
    //});

    let pesquisa = animes.find(anime => anime.title.toLowerCase() === query.toLowerCase());

    const animePesquisado = pesquisa || animes[0];

    setAnimeOnPage(animePesquisado);
}

async function handleAutoComplete(query) {
    if(query.length < 3) return hideSuggestion();

    const animes = await fetchAnime(query);

    const suggestionClickHandler = (anime) => {
        document.querySelector('.input-search').value = anime.title;
        renderAnime(anime.title);
    };

    renderSuggestion(animes, suggestionClickHandler);
}

function init () {
    setupSearchListener((query) => {
        renderAnime(query);
    });

    // timer para não sobrecarregar a api durante a busca
    setupAutoCompleteListener((query) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            handleAutoComplete(query);
        }, 300);
    });

    // esconder o autocomplete quando clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSuggestion();
        }
    });

    renderAnime('Cowboy Bebop');
}
init();
