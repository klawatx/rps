function playSingle() {
   // clear existing result
   var resultElement = document.getElementById("result");
   resultElement.innerHTML = "";
 
    // get user selection
    var playerSelection = window.prompt(
      "Please choose: rock, paper, or scissors!",
      ""
    ).toLowerCase();
    // get computer selection
    var computerSelection = getComputerSelection();
    // play round
    var roundResult = playRound(playerSelection, computerSelection);
    // display result on the page
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = roundResult;
  }
  
  function playBestOf5() {
    // clear existing result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    
    var playerWins = 0;
    var computerWins = 0;
    for (var i = 0; i < 5; i++) {
      // get user selection
      var playerSelection = window.prompt(
        "Please choose: rock, paper, or scissors!",
        ""
      ).toLowerCase();
      // get computer selection
      var computerSelection = getComputerSelection();
      // play round
      var roundResult = playRound(playerSelection, computerSelection);
      // update win counts
      if (roundResult.includes("win")) {
        playerWins++;
      } else if (roundResult.includes("Computer wins")) {
        computerWins++;
      }
      // display result on the page
      var resultElement = document.getElementById("result");
      resultElement.innerHTML += "<p>" + roundResult + "</p>";
    }
    // determine overall winner
    if (playerWins > computerWins) {
      var overallResult = "You win the best of 5 games! You won " + playerWins + " games.";
    } else if (computerWins > playerWins) {
      var overallResult = "Computer wins the best of 5 games! The computer won " + computerWins + " games.";
    } else {
      var overallResult = "It's a tie! You and the computer each won " + playerWins + " games.";
    }
    // display overall result on the page
    var resultElement = document.getElementById("result");
    resultElement.innerHTML += "<p>" + overallResult + "</p>";
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie! You both chose " + playerSelection + ".";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return (
        "You win! You chose " +
        playerSelection +
        " and the computer chose " +
        computerSelection +
        "."
      );
    } else {
      return (
        "Computer wins! The computer chose " +
        computerSelection +
        " and you chose " +
        playerSelection +
        "."
      );
    }
  }
  
  function getComputerSelection() {
    var computerOperand = Math.floor(Math.random() * 3);
  
    if (computerOperand === 0) {
      return "rock";
    } else if (computerOperand === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  