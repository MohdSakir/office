
var ourStory = document.getElementsByClassName('our-story')[0];
ourStory.style.backgroundColor = 'white';
var burgerline = document.getElementsByClassName('line');
burgerline[0].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
burgerline[1].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
burgerline[2].style.backgroundColor=' rgba(255, 255, 255, 0.3)';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 1500) {
        // green
        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
    }
    else if(scroll>=1500 && scroll < 4000 ){
        ourStory.style.backgroundColor = 'black';
        ourStory.style.color = 'white';
    }
    else if(scroll>=4000 && scroll<4100){
      ourStory.style.backgroundColor='white';
      ourStory.style.color='black';
    }
    else if(scroll>=4100 && scroll < 4300){
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




//Replace Text function		 
$(function () { 
  count = 0; 
  wordsArray = [" cool", " amazing", " super", "marvalous"]; 
  setInterval(function () { 
    count++; 
    $("#word").fadeOut(500, function () { 
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
    }); 
  }, 2000); 
}); 
//End Replace Text function	


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


