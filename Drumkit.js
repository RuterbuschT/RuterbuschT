for(i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        buttonInnerHTML = this.innerHTML

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

//testing arrow function 
document.addEventListener("keydown", (event) =>{
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
        break;

    case "s":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
    case "a":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    
    case "q":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    case "e":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "r":
        var kick = new Audio("sounds/kick-bass.mp3")
        kick.play();

        break;

    case " ":
        document.getElementById("event-log").textContent = " ";
        break;

    default: alert("hit an appropriate key!")
    break;
}

}

//i can assign document.getElementById("event-logReset") and others to a variable,
// but I keep writing it for practice

function logKey(key){
    document.getElementById("event-log").innerHTML += `${key}`;
}

document.addEventListener("keydown", (event) =>{
    if(event.key === " ") {
    }
    else{
    logKey(`"${event.key}" was pressed <br>`);
    }
})

document.getElementById("event-logReset").addEventListener("click" , (event) =>{
    
    document.getElementById("event-log").textContent = " ";

    if(event.key === " "){
        document.getElementById("event-log").textContent = " ";
    }

})

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
