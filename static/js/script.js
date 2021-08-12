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
    <li><a href="/cadastroUser">Cadastre-se</a></li>
    </ol>
    </div>
  </nav>`;

const foot = document.querySelector('#foot');
foot.innerHTML = 
`<div class="footer-basic">
<footer>
  <ul class="list-inline-footer">
    <li class="list-inline-item"><a href="/contact">Contato</a></li>
    <li class="list-inline-item"><a href="/about">Sobre</a></li>
    <li class="list-inline-item"><a href="">Mapa do Site</a></li>
    <li class="list-inline-item"><a href="">Termos de Uso</a></li>
  </ul>
  <hr>
  <p class="copyright">©2021 GAMEFLIX, INC. TODOS OS DIREITOS RESERVADOS.<br>Todas as marcas registradas mencionadas
    são de propriedade de seus respectivos donos.</p>
</footer>
</div>`;


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
  for(i = 0; i < dot.length;i++) {
    dot[i].classList.remove('active');
  }
  if(n >myslide.length){
    counter = 1;
  }
  if(n<1){
    counter = myslide.length;
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

