let toggleswitch = document.getElementById("toggleSwitch");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let itemsList = document.querySelectorAll(".item");

function alteraTema() {
  querySelectorAll(".item");

  if (toggleswitch.checked) {

    body.classList.add("body-dark");
    h1.classList.add("h1-dark");

    itemsList.forEach((item) => {
      item.classList.add("items-dark");
      item.classList.add("items-text-dark");
    });

  } else {

    body.classList.remove("body-dark");
    h1.classList.remove("h1-dark");

    itemsList.forEach((item) => {
      item.classList.remove("items-dark");
      item.classList.remove("items-text-dark");
    });
  }
}

let tigre = {
  src: "./imagens/tiger.jpg",
  nome: "O tigre",
  texto:
    "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
};

let leao = {
  src: "./imagens/leon.jpg",
  nome: "O leão",
  texto:
    "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.",
};

let leopardo = {
  src: "./imagens/leopardo.jpg",
  nome: "O leopardo",
  texto:
    "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).",
};

let panteraNegra = {
  src: "./imagens/pantera-negra.jpg",
  nome: "A pantera negra",
  texto:
    "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
};
let jaguar = {
  src: "./imagens/jaguar.jpg",
  nome: "O jaguar",
  texto:
    "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
};

let guepardo = {
  src: "./imagens/chita.jpg",
  nome: "O guepardo",
  texto:
    "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
};

let animais = [tigre, leao, leopardo, guepardo, panteraNegra, jaguar];

let novoAnimal = function (src, nome, texto) {
  return `
    <div class="item">
      <img src="${src}">
      <h2>${nome}</h2>
      <p>
        ${texto}}
      </p>
    </div>
    `;
};

for (i = 0; i < animais.length; i++) {
  document.querySelector("#containerFelinos").innerHTML += novoAnimal(
    animais[i].src,
    animais[i].nome,
    animais[i].texto
  );
}
