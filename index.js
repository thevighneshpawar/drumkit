// Button Section

for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    }
  )
}

function makeSound(key){

  switch (key) {
    case 'w':
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    case 'j':
      var audio = new Audio('snare.mp3');
      audio.play();
      break;
    case 'k':
      var audio = new Audio('crash.mp3');
      audio.play();
      break;
    case 'l':
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(key);
  }

}

// Keyboard Section
// Key Press

document.addEventListener("keydown",function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});

function buttonAnimation(currentKey){

  var activekey=document.querySelector("."+currentKey);
  activekey.classList.add("pressed");
  setTimeout(function(){
    activekey.classList.remove("pressed");
  },100);
}
