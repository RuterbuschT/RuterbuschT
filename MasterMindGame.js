

const playerChoices = [];
let lines = 6
const secretCode = [];  
const guessedColor = document.querySelector(".guess");


const main = () =>{
      generateSecretCode();
      console.log(secretCode)
      const buttons = document.querySelectorAll(".buttons > *");
      buttons.forEach(button => button.addEventListener("click", playerGuess) );
      const submitButton = document.querySelector("#submit");
      submitButton.addEventListener("click", handleSubmit)

}

const generateSecretCode = () => {
      const colorsForGame = ['red', 'green', 'blue', 'orange', 'purple', 'black', 'gray'];
      
      
      while(secretCode.length < 4){
          const randomColorIndex =  Math.floor(Math.random() * colorsForGame.length);
          const randomColor = colorsForGame[randomColorIndex];


            if(!secretCode.includes(randomColor)){
                  secretCode.push(randomColor)
            }
      }
    // console.log(secretCode)
}

const playerGuess = e => {
      let playerClick = e.target
      let playerChoice = playerClick.getAttribute("class")
      // console.log(playerChoice)
      const coloredDiv = document.createElement("div");
      coloredDiv.classList.add("picked-color", playerChoice); //adds the CSS styling from .selected-color
      guessedColor.appendChild(coloredDiv)
      playerChoices.push(playerChoice)
      //console.log(playerChoices)
}

const handleSubmit = () => {
      let guessedLine = document.createElement("div")
      guessedLine.classList.add("guess-line")

      const currentGuess = playerChoices.slice(0,4);
      console.log(currentGuess)

      currentGuess.forEach((choice, i) => { // i represents the index
            const coloredDiv = document.createElement("div");
            coloredDiv.classList.add("selected-color", choice);
          
            if (currentGuess[i] === secretCode[i]) {
              coloredDiv.classList.add("in-coderightspot");
            } else if(secretCode.includes(currentGuess[i])) {
              coloredDiv.classList.add("in-code");
            }
          
            guessedLine.appendChild(coloredDiv);
          });
  
      const guessesContainer = document.querySelector(".guesses-container");
      guessesContainer.append(guessedLine)

      checkGuesses(playerChoices, secretCode)
      playerChoices.length = 0;
      guessedColor.innerHTML = "";
}


const checkGuesses = (playerChoices, secretCode) => {
      
      let correctColors = 0;
      let correctPosition = 0;

      // while(lines > 0){
            // let guessedLine = document.createElement("div")
            // guessedLine.classList.add("guess-lined")

       
            for(let i = 0; i < secretCode.length; i++){
                  if(playerChoices[i] === secretCode[i]){
                        correctPosition++;
                        
                  }
                  if(secretCode.includes(playerChoices[i])){
                        
                        correctColors++;

                  }
            }
      

            const currentColorMessage = document.querySelector(".currentColors");
            const correctPositions = document.querySelector(".correctPositions");
            currentColorMessage.innerHTML = `Currently ${correctColors} correct colors`
            correctPositions.innerHTML = `Currently ${correctPosition} colors in the right position`
      
            
            // Append the guess line to the game container
           
            // Decrease the lines counter
            // Check if the player has won
            if(correctPosition === secretCode.length){
                  document.querySelector("#result").innerText = "You win!"
                  document.querySelector("#submit").setAttribute("disabled", '')
            }else{
                  lines--;
            }
            /*
            checks if the number of correct positions equals the total number of colors in the secret code. 
            If it's true, it means that the player has guessed all the colors in the correct positions, 
            which is the condition for winning the game.
            */
            // Check if the player has lost (exhausted all lines)

            if(lines === 0){
                  document.querySelector("#result").innerText = `You lose. The correct combination was ${secretCode}`
                  document.querySelector("#submit").setAttribute("disabled", '')
            }
      }
     
// }


main();



























   // for(i = 0; i <= currentGuess.length; i++){
      //       if(secretCode.includes(currentGuess) && !(currentGuess[i] === secretCode[i]) ){ 
      //         coloredDiv.classList.add("in-code")
      //       
      //       }else if(currentGuess[i] === secretCode[i]){
      //         coloredDiv.classList.add("in-coderightspot")
      //        
      //       }
      //       }











// const buttons = document.querySelectorAll(".buttons > *")
// buttons.forEach(button => button.addEventListener("click", playerGuess) )


// const generateSecretCode = () => {
//       // let randomNumber = Math.floor(Math.random() * 6);
      
//       for(i = 0; i <= 7; i++){
//             let randomColor = colorsForGame[i]
//             secretCode.push(randomColor)
            
//             if(secretCode[i] === secretCode[i]){
//                   continue;
//             }

//            if(secretCode.length >= 4){
//             break;
//            }
//       }
    
//       console.log(secretCode)
// }