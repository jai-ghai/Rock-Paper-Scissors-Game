function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }



  // logic

let userScore = localStorage.getItem("userScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;

document.getElementById("userScore").textContent = userScore;
document.getElementById("computerScore").textContent = computerScore;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  const result = findWinner(userChoice, computerChoice);

  if (result === 'win') {
    userScore++;
  } else if (result === 'lose') {
    computerScore++;
  }


  document.getElementById("userScore").textContent = userScore;
  document.getElementById("computerScore").textContent = computerScore;


  // Update local storage
  localStorage.setItem("userScore", userScore);
  localStorage.setItem("computerScore", computerScore);


  // Navigate to result page based on outcome
  if (result === 'win') {
    window.location.href = 'win-page.html';
  } else if (result === 'lose') {
    window.location.href = 'lose-page.html';
  } else {
    window.location.href = 'tie-up-page.html';
  }
}

function findWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}
