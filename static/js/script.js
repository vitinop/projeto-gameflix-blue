const nav = document.querySelector('#nav');
nav.innerHTML = 
    `<nav>
    <img src="../static/img/logomarca-2.svg">
    <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/todos-jogos">lista Jogos</a></li>    
    </ol>
    
    <div class="search-box">
      <button class="btn-search"><i class="fas fa-search"> <img src="/static/img/lupa.png"></i></button>
      <input type="text" class="input-search" placeholder="Buscar...">
    </div>
    </div class="loginBotao">
    <ol>
    <li><a href="/login">Login</a></li>
    <li><a href="/cadastro">Cadastre-se</a></li>
    </ol>
    </div>
  </nav>`;

const foot = document.querySelector('#foot');
foot.innerHTML = 
`<div class="footer-basic">
<footer>
  <ul class="list-inline-footer">
    <li class="list-inline-item"><a href="#">Suporte</a></li>
    <li class="list-inline-item"><a href="#">Sobre</a></li>
    <li class="list-inline-item"><a href="#">Mapa do Site</a></li>
    <li class="list-inline-item"><a href="#">Termos de Uso</a></li>
  </ul>
  <hr>
  <p class="copyright">©2021 GAMEFLIX, INC. TODOS OS DIREITOS RESERVADOS.<br>Todas as marcas registradas mencionadas
    são de propriedade de seus respectivos donos.</p>
</footer>
</div>`;

const addTitle = document.querySelector('#addTitle');
addTitle.innerHTML = `
<form action="/new" method="POST">
    <div class="infoJogo">

      <div id="nomeAdd">
        <input type="text" placeholder="Nome do título" name="nomeJogo" required id="game_name">
      </div>

      <div id="produtoraAdd">
        <input type="text" placeholder="Produtora" name="produtora" required id="game_producer">
      </div>

      <div id="lacamentoAdd">
        <p>Lançamento</p>
        <input id="ano" type="number" value="2021" name="dataLancamento">
      </div>

      <div id="notaAdd">
        <p>Nota Metacritic</p>
        <input type="number" placeholder="0-100 " name="notaMetric" id="game_grade" required>
      </div>
      <div class="caixasdeOpcoes">
        <div id="idadeRecomendadaAdd">
          <p>Classificação Indicativa</p>
          <select name="classificacao" id="game_parental_rating">
            <option>Classificação Indicativa</option>
            <option value="18">+18 - Não recomendado para menores de 18 anos</option>
            <option value="16">+16 - Não recomendado para menores de 16 anos</option>
            <option value="14">+14 - Não recomendado para menores de 14 anos</option>
            <option value="12">+12 - Não recomendado para menores de 12 anos</option>
            <option value="10">+10 - Não recomendado para menores de 10 anos</option>
            <option value="0">L - Livre para todos os Públicos </option>
          </select>
        </div>
        <div id="generoaAdd">
          <p>Gênero</p>
          <select name="genero" id="game_gender">
            <option>Selecione um ou mais gêneros</option>
            <option value="action">Ação</option>
            <option value="rpg">RPG</option>
            <option value="fps">Tiro em Primeira Pessoa - FPS</option>
            <option value="tps">Tiro em Terceira Pessoa - TPS</option>
            <option value="plataform">Plataforma</option>
            <option value="fighting">Luta</option>
            <option value="music">Musical</option>
            <option value="horror">Terror</option>
            <option value="stealth">Espionagem</option>
            <option value="adventure">Aventura</option>
            <option value="action">Ação</option>
            <option value="mmo"> MMO - Massively Multiplayer Online</option>
            <option value="moba"> MOBA - Multiplayer Online Battle Arena </option>
            <option value="openWorld"> Mundo Aberto </option>
          </select>
        </div>
      </div>
      <div id="descricaoAdd">
        <textarea type="text" placeholder="Descrição do jogo..." name="descricao" id="game_description"
          required></textarea>
      </div>


      <div id="midiaAdd">
        <p>Mídia</p>
        <input type="text" placeholder="URL do Trailer" name="trailler" required id="game_trailer">
        <input type="text" placeholder="URL da Imagem" name="imagemLink" required id="game_img">
        <input type="text" placeholder="URL da Logo" name="logoLink" required id="game_logo">
      </div>


    </div>
    <button type="submit" id="botao-cadastro">Adicionar Título ao catálogo</button>
    
  </form>
`

const myslide = document.querySelectorAll('.myslider'),
  dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide(){
  counter +=1;
  slidefun(counter);
}
function plusSlides(n){
  counter +=n;
  slidefun(counter);
  resetTimer();
}
function currentslide(n){
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer(){
  clearInterval(timer);
  timer = setInterval(autoslide, 8000);
}
function slidefun(n){
  let i;
  for (i = 0; i < myslide.length; i++){
    myslide[i].style.display = "none";
  }
  for(i = 0; i <dot.length;i++) {
    dot[i].classList.remove('active');
  }
  if(n >myslide.lenght){
    counter = 1;
  }
  if(n<1){
    counter = myslide.lenght;
  }
  myslide[counter -1].style.display = "block";
  dot[counter - 1].classList.add('active');
}





const description = document.getElementsByClassName("swiper-slide");
// Get the modal
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
let btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

description.forEach(element => {
  element.addEventListener('click', function(){
    alert('funcionou')
  })
});

