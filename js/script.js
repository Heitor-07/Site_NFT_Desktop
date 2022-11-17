
$(document).ready(function(){
    $('#lupa').on('click', function(){
        $("#search input").slideToggle().focus()
    })
})

let imagens = [
    ['0', 'assets/img/survivalMovie.png', 'Survival Movie', 'Geraldin Vergara García'],
    ['1', 'assets/img/Metaverse.png', 'Metaverse Virtual World', 'LeewayHertz'],
    ['2', 'assets/img/Adidas.jpg', 'Bored Ape Yacht Club', 'Adidas'],
    ['3', 'assets/img/Token_No_Fungibles.jpg', 'Non Fungible Token','Iberdrola']
]

function slides(e) {
    document.querySelector('.slide img').src = imagens[e][1]
    document.querySelector('.slide h4').innerHTML = imagens[e][2]
    document.querySelector('.slide p').innerHTML = imagens[e][3]
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

/* if(window.navigator.userAgent.indexOf('Chrome') > -1){
  document.querySelector('.arrow-left').style.top = '155%';
  document.querySelector('.arrow-right').style.top = '155%';

  document.querySelector('#collections .arrow-left').style.top = '329%';
  document.querySelector('#collections .arrow-right').style.top = '329%';
}



if(window.navigator.userAgent.indexOf('Edg') > -1){
  document.querySelector('.arrow-left').style.top = '150%';
  document.querySelector('.arrow-right').style.top = '150%';

  document.querySelector('#collections .arrow-left').style.top = '312%';
  document.querySelector('#collections .arrow-right').style.top = '312%';
}




if(window.navigator.userAgent.indexOf('Firefox') > -1){

  document.querySelector('#collections .arrow-left').style.top = '317%';
  document.querySelector('#collections .arrow-right').style.top = '317%';
  
  
} */




