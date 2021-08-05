const nav = document.querySelector('#nav');
nav.innerHTML = 
    `<nav>
    <img src="../static/img/logomarca-2.svg">
    <ol>
    <li><a href="index.html">Home</a></li>
    <li><a href="todos-jogos.html">lista Jogos</a></li>
    
    <li><a href="login.html">Login</a></li>
    </ol>
    
    <div class="search-box">
      <button class="btn-search"><i class="fas fa-search"> <img src="/static/img/lupa.png"></i></button>
      <input type="text" class="input-search" placeholder="Type to Search...">
    </div>
  </nav>`
;

const foot = document.querySelector('#foot');
foot.innerHTML = `
<div class="footer-basic">
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
