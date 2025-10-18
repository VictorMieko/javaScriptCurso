const animeNome = document.querySelector('.title-anime');
const nomeJapones = document.querySelector('.title-anime-english');
const numEpisodios = document.querySelector('.episode-number');
const imgAnime = document.querySelector('.img-anime');
const sinopseAnime = document.querySelector('#synopse-anime');

export function setAnimeOnPage(animeFinal) {
    if(!animeFinal) return;

    animeNome.innerHTML = animeFinal.title;
    nomeJapones.innerHTML = animeFinal.title_english;
    imgAnime.src = animeFinal.images.jpg.image_url;
    sinopseAnime.innerHTML = animeFinal.synopsis;
    imgAnime.alt = `Capa do anime ${animeFinal.title}`;
    numEpisodios.innerHTML = animeFinal.episodes || 'Em lançamento';
}

const suggestionList = document.getElementById('suggestion-list');

export function renderSuggestion(animes, onSuggestionClick) {
    suggestionList.innerHTML = '';

    if(!animes || animes.length === 0) return suggestionList.classList.add('hidden');

    suggestionList.classList.remove('hidden');

    animes.slice(0,5).forEach(anime => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = anime.images.jpg.image_url;
        img.alt = anime.title;
        img.classList.add('suggestion-img');

        const titleSpan = document.createElement('span');
        titleSpan.textContent = anime.title;
        titleSpan.classList.add('suggestion-title');

        li.appendChild(img);
        li.appendChild(titleSpan);

        li.addEventListener('click', () => {
            onSuggestionClick(anime);
        });

        suggestionList.appendChild(li);
    });
}

export function hideSuggestion() {
    suggestionList.classList.add('hidden');
}
