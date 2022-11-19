
$(document).ready(function(){
    $('#lupa').on('click', function(){
        $("#search input").slideToggle().focus()
    })
})

/* Array de imagens dos slide Top */

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

const controleSlide1 = document.querySelectorAll('.control-Slide1');

const scrollSlide1 = document.querySelector('.notable-img');

Array.prototype.forEach.call(controleSlide1, (button) => {
  button.addEventListener('click', (e) => {
    
    isLeft = e.target.offsetParent.classList.contains('arrow-left');
    isRight = e.target.offsetParent.classList.contains('arrow-right');
    
    if(isLeft){
      scrollSlide1.scrollLeft -= 400;
      if(scrollSlide1.scrollLeft == 0){
        document.querySelector('#notable .arrow-left').setAttribute('style', 'display: none');
      } 

      /* mostrar botão direito */
      document.querySelector('#notable .arrow-right').setAttribute('style', 'display: block');

    } 
    if(isRight){
      scrollSlide1.scrollLeft += 400;
      document.querySelector('#notable .arrow-left').setAttribute('style', 'display: block');
      
      /* Ocultar botão direito quando chega no final do carrossel */
      if(scrollSlide1.scrollLeft == 1250){
        document.querySelector('#notable .arrow-right').setAttribute('style', 'display: none');
      }
    }

  })

})

/* Controle dos butões slide Collections*/

const controleSlide2 = document.querySelectorAll('.control-Slide2');

const scrollSlide2 = document.querySelector('.collections-img');

Array.prototype.forEach.call(controleSlide2, (button) => {
  button.addEventListener('click', (e) => {
    
    isLeft = e.target.offsetParent.classList.contains('arrow-left');
    isRight = e.target.offsetParent.classList.contains('arrow-right');

    if(isLeft){
      scrollSlide2.scrollLeft -= 400;
      if(scrollSlide2.scrollLeft == 0){
        document.querySelector('#collections .arrow-left').setAttribute('style', 'display: none');
      }

      /* mostrar botão direito */
      document.querySelector('#collections .arrow-right').setAttribute('style', 'display: block');


    } 
    if(isRight){
      scrollSlide2.scrollLeft += 400;
      document.querySelector('#collections .arrow-left').setAttribute('style', 'display: block');
      
      /* Ocultar botão direito quando chega no final do carrossel */
      if(scrollSlide2.scrollLeft == 1240){
        document.querySelector('#collections .arrow-right').setAttribute('style', 'display: none');
      }
    }
    
  })

})

mostrarBotao = () => {

  /* Ocultar botão esquerdo */
  if(scrollSlide1.scrollLeft < 400){
    document.querySelector('#notable .arrow-left').setAttribute('style', 'display: none');
  } 
  if(scrollSlide2.scrollLeft < 400){
    document.querySelector('#collections .arrow-left').setAttribute('style', 'display: none');
  } 

}

mostrarBotao();




