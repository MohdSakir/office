
var ourStory = document.getElementsByClassName('our-story')[0];
ourStory.style.backgroundColor = 'white';


window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 900) {
        // green
        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
    }
    else if(scroll>=900 && scroll < 2500 ){
        ourStory.style.backgroundColor = 'black';
        ourStory.style.color = 'white';
    }
    else{
        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
    }
    
}
 
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


// var text = ["Welcome", "Hi", "Sup dude"];
// var counter = 0;
// var elem = document.getElementsByClassName("changeText");
// var inst = setInterval(change, 1000);

// function change() {
//   elem.innerHTML = text[counter];
//   counter++;
//   if (counter >= text.length) {
//     counter = 0;
//     // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
//   }
// }


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


const open = document.querySelector('.container');
    const close = document.querySelector('.close');
    var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
    open.addEventListener('click', () => {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.to('nav', { right: 0 })
          .to('nav', { height: '100vh' }, '-=.1')
          .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
          .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
          .to('nav h2', { opacity: 1 }, '-=1');
      }
    });

    close.addEventListener('click', () => {
      tl.reverse();
    });

