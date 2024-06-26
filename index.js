var buttons = document.querySelectorAll(".drum");
for(var i=0;i<buttons.length;i++){
  buttons[i].addEventListener("click", function(){

    var buttonName = this.innerHTML;
    keyPress(buttonName);
    buttonAnimation(buttonName);

  });
}

document.addEventListener("keydown", function(event){
  keyPress(event.key);
  buttonAnimation(event.key)

});

function keyPress (keyName) {
  switch (keyName) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
    break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
    break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
    break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
    break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
    break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
    break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
    break;
    default: console.log(keyName);
      break;
  }
}

function buttonAnimation (key){
  var currentButton = document.querySelector("."+key);
  currentButton.classList.add("pressed");
  setTimeout(() => {
    currentButton.classList.remove("pressed");
  }, 100);
}