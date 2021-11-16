let user_choice = 0;
let computer_choice = 0;

let result;

let computer_score = 0;
let user_score = 0;

document.getElementById("rock").style = "border-color:white;";
document.getElementById("paper").style = "border-color:white;";
document.getElementById("scissors").style = "border-color:white;";

document.getElementById("rock").onclick = () => {
    user_choice = "rock";
    computer();
    logic();

  if (result == "Computer") {
    document.getElementById("rock").style = "border-color:red;";
  } else if (result == "User") {
    document.getElementById("rock").style = "border-color:lime;";
  } else {
    document.getElementById("rock").style = "border-color:white;";
  }

  score();
};

document.getElementById("paper").onclick = () => {
  user_choice = "paper";
  computer();
  logic();

  if (result == "Computer") {
    document.getElementById("paper").style = "border-color:red;";
  } else if (result == "User") {
    document.getElementById("paper").style = "border-color:lime;";
  } else {
    document.getElementById("rock").style = "border-color:white;";
  }

  score();
};

document.getElementById("scissors").onclick = () => {
  user_choice = "scissors";
  computer();
  logic();

  if (result == "Computer") {
    document.getElementById("scissors").style = "border-color:red;";
  } else if (result == "User") {
    document.getElementById("paper").style = "border-color:lime;";
  } else {
    document.getElementById("rock").style = "border-color:white;";
  }

  score();
};

// functions

function computer() {
  let random_integer = Math.floor(Math.random() * 3 + 1);

  if (random_integer == 1) {
    computer_choice = "rock";
  } else if (random_integer == 2) {
    computer_choice = "paper";
  } else {
    computer_choice = "scissors";
  }
}

// logic for game
function logic() {
  if (user_choice == "rock" && computer_choice == "paper") {
    result = "Computer";
    computer_score++;
    document.getElementById("result").innerHTML = "Rock beats Paper Computer Wins!";
  } else if (user_choice == "paper" && computer_choice == "rock") {
    result = "User";
    user_score++;
    document.getElementById("result").innerHTML = "Paper beats Rock You Win!";
  } else if (user_choice == "scissors" && computer_choice == "rock") {
    result = "Computer";
    computer_score++;
    document.getElementById("result").innerHTML = "Scissors beats Rock Computer Wins!";
  } else if (user_choice == "rock" && computer_choice == "scissors") {
    result = "User";
    user_score++;
    document.getElementById("result").innerHTML = "Rock beats Scissors You Win!";
  } else if (user_choice == "scissors" && computer_choice == "paper") {
    result = "User";
    user_score++;
    document.getElementById("result").innerHTML = "Scissors beats Paper You Win!";
  } else if (user_choice == "paper" && computer_choice == "scissors") {
    result = "Computer";
    computer_score++;
    document.getElementById("result").innerHTML = "Scissor beats Paper Computer Wins!";
  } else {
    document.getElementById("result").innerHTML = "Tie!!";
  }
}

function score(){
    document.getElementById('score-user').innerHTML=user_score;
    document.getElementById('score-computer').innerHTML=computer_score;
}