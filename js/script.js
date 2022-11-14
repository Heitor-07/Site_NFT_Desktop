
$(document).ready(function(){
    $('#lupa').on('click', function(){
        $("#search input").slideToggle().focus()
    })
})

let imagens = [
    ['0', 'assets/img/survivalMovie.png'],
    ['1', 'assets/img/Metaverse.png'],
    ['2', 'assets/img/Adidas.jpg'],
    ['3', 'assets/img/Token_No_Fungibles.jpg']
]

function slides(e) {
    document.querySelector('.slide img').src = imagens[e][1]
}

/* Controle dos butões slide Notable*/

const controls = document.querySelector('.notable-img');

const controle = document.querySelectorAll('.control');

Array.prototype.forEach.call(controle, (button) => {
  button.addEventListener('click', (e) => {
    
    isLeft = e.target.offsetParent.classList.contains('arrow-left');
    
    if(isLeft){
      controls.scrollLeft -= 400;
    } else{
      controls.scrollLeft += 400;
    }

  })

})

/* Controle dos butões slide Collections*/

let controlsCollections = document.querySelector('.collections-img');

Array.prototype.forEach.call(controle, (button) => {
  button.addEventListener('click', (e) => {
    isLeft = e.target.offsetParent.classList.contains('arrow-left');
    
    if(isLeft){
      controlsCollections.scrollLeft -= 400;
    } else{
      controlsCollections.scrollLeft += 400;
    }

  })

})

/* Correção dos butões dos slides */

/* Chrome */

if(window.navigator.userAgent.indexOf('Chrome') > -1){
  document.querySelector('.arrow-left').style.top = '155%';
  document.querySelector('.arrow-right').style.top = '155%';

  document.querySelector('#collections .arrow-left').style.top = '329%';
  document.querySelector('#collections .arrow-right').style.top = '329%';
}

/* Edge */

if(window.navigator.userAgent.indexOf('Edg') > -1){
  document.querySelector('.arrow-left').style.top = '150%';
  document.querySelector('.arrow-right').style.top = '150%';

  document.querySelector('#collections .arrow-left').style.top = '312%';
  document.querySelector('#collections .arrow-right').style.top = '312%';
}


/* FireFox */

if(window.navigator.userAgent.indexOf('Firefox') > -1){

  document.querySelector('#collections .arrow-left').style.top = '317%';
  document.querySelector('#collections .arrow-right').style.top = '317%';
  
  
}




