var grid2 = document.getElementsByClassName('grid-item')[0];
var items2 = document.getElementsByClassName('items')[0];
var ourStory = document.getElementsByClassName('our-story')[0];
var discover = document.getElementsByClassName('discover-link')[0];
discover.style.color='black';
grid2.style.backgroundColor = 'white';
items2.style.backgroundColor = 'white';
ourStory.style.backgroundColor = 'white';
// var burgerline = document.getElementsByClassName('line');
// burgerline[0].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
// burgerline[1].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
// burgerline[2].style.backgroundColor=' rgba(255, 255, 255, 0.3)';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 1900) {
        // green
        grid2.style.backgroundColor = 'white';
        items2.style.backgroundColor = 'white';
        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
        discover.style.color='black';
    }
    else if(scroll>=1900 && scroll < 3300 ){
      grid2.style.backgroundColor = 'black';
      items2.style.backgroundColor = 'black';
        ourStory.style.backgroundColor = 'black';
        ourStory.style.color = 'white';
        discover.style.color='white';
    }
    else if(scroll>=3300 && scroll<3400){
      grid2.style.backgroundColor = 'white';
      items2.style.backgroundColor = 'white';
      ourStory.style.backgroundColor='white';
      ourStory.style.color='black';
      discover.style.color='black';
    }
    // else if(scroll>=4300 && scroll < 4500){
    //   burgerline[0].style.backgroundColor='black';
    //   burgerline[1].style.backgroundColor='black';
    //   burgerline[2].style.backgroundColor='black';
    // }
    else{

      grid2.style.backgroundColor = 'white';
      items2.style.backgroundColor = 'white';
        ourStory.style.backgroundColor = 'white';
        ourStory.style.color = 'black';
        discover.style.color='black';
        // burgerline[0].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
        // burgerline[1].style.backgroundColor=' rgba(255, 255, 255, 0.3)';
        // burgerline[2].style.backgroundColor=' rgba(255, 255, 255, 0.3)';

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
  wordsArray = [" cool", " amazing", " super"]; 
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


// const studio = document.getElementsByClassName('studio2')[0];
// studio.style.opacity='1';
// window.onscroll2=function(event){
//   const scroll2 = window.pageYOffset;
//   if(scroll2<4000){
//     studio.style.opacity='0';
//   }
//   else
//   studio.style.opacity='1';
// }


function toggleText() {
  
  // Get all the elements from the page
  var points = 
      document.getElementById("points");

  var showMoreText =
      document.getElementById("moreText");

  var buttonText =
      document.getElementById("textButton");

  // If the display property of the dots 
  // to be displayed is already set to 
  // 'none' (that is hidden) then this 
  // section of code triggers
  if (points.style.display === "none") {

      // Hide the text between the span
      // elements
      showMoreText.style.display = "none";

      // Show the dots after the text
      points.style.display = "inline";

      // Change the text on button to 
      // 'Show More'
      buttonText.innerHTML = "Show More";
  }

  // If the hidden portion is revealed,
  // we will change it back to be hidden
  else {

      // Show the text between the
      // span elements
      showMoreText.style.display = "inline";

      // Hide the dots after the text
      points.style.display = "none";

      // Change the text on button
      // to 'Show Less'
      buttonText.innerHTML = "Show Less";
  }
}