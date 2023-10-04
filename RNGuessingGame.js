let lives = 4
const computerNum = () => Math.floor(Math.random () * 100) + 1



function toggleCard(card) {
    card.classList.toggle("flipped");
}

let computerNumber = computerNum();
console.log(computerNumber)

document.querySelector("#submit").addEventListener("click", function (){
    var humanGuess = document.getElementById('humanNumber').value;
    var humanCard = document.querySelector('.flip-card-inner');
    var computerCard = document.querySelector('.computer-card-inner');
    humanCard.classList.add("flipped")
 
    document.querySelector(".humanGuess > p").innerHTML = humanGuess;
    document.getElementById('humanNumber').value = ""; //to clear the input box


    if(lives === 0){
        document.getElementById("result").innerHTML = `You are out of lives. Try again`;
        document.querySelector('#submit').setAttribute("disabled", true);
    }

  
    console.log(lives)
    guessChecker(humanGuess,computerNumber, humanCard, computerCard)
})




const guessChecker = (humanGuess, computerNumber, humanCard, computerCard) =>{
    lives--;


    if(humanGuess > computerNumber){
      setTimeout(() =>toggleCard(humanCard), 1000)
        return document.getElementById("result").innerHTML = `${humanGuess}. Too High`
        
    }
    
    else if(humanGuess < computerNumber){
        setTimeout(() =>toggleCard(humanCard), 1000)
        return document.getElementById("result").innerHTML = `${humanGuess}. Too Low`

    }

    else if(parseInt(humanGuess) === computerNumber){
        
        document.querySelector(".computerNum > p").innerHTML = computerNumber;
        setTimeout(() =>toggleCard(computerCard))
        return document.getElementById("result").innerHTML = `${humanGuess} was the right number! You Win!`
    }
    
    else if(isNaN(parseInt(humanGuess))){
        return document.getElementById("result").innerHTML = `Please enter a number`
    }

 }

document.querySelector("#reset").addEventListener("click", function(){
    lives = 4;
    computerNumber = computerNum();
    location.reload();

})