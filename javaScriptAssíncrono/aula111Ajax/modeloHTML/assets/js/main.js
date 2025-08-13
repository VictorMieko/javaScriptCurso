// AJAX = Assincronum JavaScript Xml
// Faz requisição de qualquer tipo de dado

// função que recebe um objeto para ser aberto
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); // constructor do XML
        xhr.open(obj.method, obj.url, true); // "verbo", URL, assincrono = true/ sincrono = false, de um objeto
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

// captura qualquer click no documento
document.addEventListener('click', e => {
    const el = e.target; // captura o evento de clique
    const tag = el.tagName.toLowerCase(); // guarda a tag do elemento

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const objConfig = ({
        method: 'GET',
        url: href
    });
    try {
        const response = await request(objConfig);
        loadResult(response)
    } catch(e) {
        console.log(e);
    }
}
function loadResult(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
