const nav = document.querySelector('#nav');
nav.innerHTML = 
    `<nav>
    <img src="../static/img/logomarca-2.svg">
    <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/todos-jogos">lista Jogos</a></li>
    
    <li><a href="/login">Login</a></li>
    </ol>
    
    <div class="search-box">
      <button class="btn-search"><i class="fas fa-search"> <img src="/static/img/lupa.png"></i></button>
      <input type="text" class="input-search" placeholder="Buscar...">
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

const edit = document.querySelector('#edit');
edit.innerHTML = `
<form action="/new" method="POST">
    <div class="infoJogo">

      <div id="nomeAdd">
        <p>Nome</p>
        <input type="text" placeholder="Nome do título" name="game_name" required id="game_name">
      </div>

      <div id="produtoraAdd">
        <p>Produtora</p>
        <input type="text" placeholder="Produtora" name="game_producer" required id="game_producer">
      </div>

      <div id="lacamentoAdd">
        <p>Lançamento</p>
        <input id="ano" type="number" value="2021">
      </div>

      <div id="notaAdd">
        <p>Nota Metacritic</p>
        <input type="number" placeholder="0-100 " name="game_grade" id="game_grade" required>
      </div>
      <div class="caixasdeOpcoes">
        <div id="idadeRecomendadaAdd">
          <p>Classificação Indicativa</p>
          <select name="game_parental_rating" id="game_parental_rating">
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
          <select name="game_gender" id="game_gender">
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
        <label for="game_description">Descrição</label>
        <textarea type="text" placeholder="Descrição do jogo..." name="game_description" id="game_description"
          required></textarea>
      </div>


      <div id="midiaAdd">
        <p>Mídia</p>
        <input type="text" placeholder="URL do Trailer" name="game_trailer" required id="game_trailer">
        <input type="text" placeholder="URL da Imagem" name="game_img" required id="game_img">
        <input type="text" placeholder="URL da Logo" name="game_logo" required id="game_logo">
      </div>


    </div>
    <button type="submit" id="botao-cadastro">Adicionar Título ao catálogo</button>
  </form>
`

