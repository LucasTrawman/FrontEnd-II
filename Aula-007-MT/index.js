// Passo 1 completo
let form = document.createElement("form");
document.body.appendChild(form);
form.innerHTML = `
<div class="item">
    <label for="text">Insira seu nome</label>
    <br>
    <input id="textNome" type="text" required>
</div>
<div class="item">
    <label for="text">Insira sua idade</label>
    <br>
    <input id="textIdade" type="text" onblur="exibeIdadeUsuario()">
</div>
<div class="item">
    <button id="botaoEnviar">Enviar</button>
    <br>
    <br>
    <button type="reset">Limpar</button>
</div>
`;

// Passo 2



// Passo 3 completo
// onload = () => alert('Alerta!!!');

// Passo 4

let textoCor = document.querySelectorAll("label");
textoCor[0].onmouseover = function () {
  textoCor[0].style.color = "red";
};
textoCor[0].onmouseout = function () {
  textoCor[0].style.color = "green";
};