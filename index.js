
var ourStory = document.getElementsByClassName('our-story')[0];
ourStory.style.backgroundColor = 'white';
var burgerline = document.getElementsByClassName('line');
burgerline[0].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
burgerline[1].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
burgerline[2].style.backgroundColor=' rgba(255, 255, 255, 0.3)';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 1300) {
        // green
        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
    }
    else if(scroll>=1300 && scroll < 2500 ){
        ourStory.style.backgroundColor = 'black';
        ourStory.style.color = 'white';
    }
    else if(scroll>=2800 && scroll < 5200){
      burgerline[0].style.backgroundColor='black';
      burgerline[1].style.backgroundColor='black';
      burgerline[2].style.backgroundColor='black';
    }
    else{

        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
        burgerline[0].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
        burgerline[1].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
        burgerline[2].style.backgroundColor=' rgba(255, 255, 255, 0.3)';

    }
    
}


const bg = document.getElementById('design-image');
window.addEventListener('scroll', function(){
  bg.style.backgroundSize = 100 + +window.pageYOffset/20+'%';
  // bg.style.opacity = 0.8 + +window.pageYOffset/7+'%';
})





// $(function() {

//   $(window).scroll(function() {

//     var mass = Math.min(20, 1+0.005*$(this).scrollTop());

//     $('#design-image').css('transform', 'scale(' + mass + ')');
//   });
// });
 
// var bigImage = document.getElementsByClassName('image');
// bigImage.style.backgroundSize = '100%';

// window.onscroll = function (event){
//     var scroll =window.pageYOffset;
//     if(scroll<500){
//         bigImage.style.backgroundSize = '100%';
//     }
//     else{
//         bigImage.style.backgroundSize = '150%';
//     }
// }


var text = ["Welcome", "Hi", "Sup dude"];
var counter = 0;
var elem = document.getElementsByClassName("changeText");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}


const slider = document.querySelector('.items');
console.log(slider);

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


