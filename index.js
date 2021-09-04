//getting total numbe of classes with class drum
  var drumCount = document.querySelectorAll(".drum").length;


//to detect which button is clciked
  for (var i = 0; i < drumCount; i++) {
    //selecting drum that is clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

//passing text of button to functions
      drumClick(this.innerHTML);
      clickAnimation(this.innerHTML);
    });
}

//Kyeboard button click
document.addEventListener("keypress", function(event){

//pasing which kye is pressed to function
drumClick(event.key);
clickAnimation(event.key);

});

//function to play audio on mouse click or kyeboard button press
      function drumClick(key){

//kye is a text of button or kye that is pressed
      switch (key) {
      case "w":
        new Audio("sounds/tom-1.mp3").play();

        break;
      case "a":
        new Audio("sounds/tom-2.mp3").play();

        break;
      case "s":
        new Audio("sounds/tom-3.mp3").play();
        break;
      case "d":
        new Audio("sounds/tom-4.mp3").play();

        break;
      case "j":
        new Audio("sounds/snare.mp3").play();

        break;
      case "k":
        new Audio("sounds/crash.mp3").play();

        break;
      case "l":
        new Audio("sounds/kick-bass.mp3").play();
        break;
      default: console.log(this.innerHTML);

    }
}

//function to add animation on button or kye press
function clickAnimation(curruntkey)
{
  var activeButton = document.querySelector("."+curruntkey);

//adding class  .pressed to apply animation
  activeButton.classList.add("pressed");
//providing dealy to add and remove class
  setTimeout(function(){
    activeButton.classList.remove("pressed"); //removinf class .pressed
  },200);
}
