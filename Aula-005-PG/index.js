function escreverHTML(titulo, texto){
    const body = document.getElementById('body');
    const meuTemplate = `
    <h1>${titulo}</h1>
    <p>${texto}</p>
    `;
    body.innerHTML += meuTemplate
}

escreverHTML('Olá', 'Isso é um exemplo de template string em HTML.')