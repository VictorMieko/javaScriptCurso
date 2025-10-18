document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('Nosso ERRO 404');

        const html = await response.text();
        loadResult(html);
    } catch(e) {
        console.error(e);
    }
}

function loadResult(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

/*
// Fetch API (GET)
fetch('pagina1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e));

fetch(href) // carrega o link
    .then(response => {
        if (response.status !== 200) throw new Error('Nosso ERRO 404');
        return response.text() // pega a resposta e converte em texto(retorna um html)
    })
    .then(html => loadResult(html))
    .catch(e => console.error(e));
    */
