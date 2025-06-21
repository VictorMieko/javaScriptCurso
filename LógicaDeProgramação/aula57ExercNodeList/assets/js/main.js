//MUDAR A COR DO PARAGRAFO PEGANDO A COR DO BACKGROUND PELO JAVASCRIPT
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);//pega todo CSS que foi computado pelo navegador no body
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}
