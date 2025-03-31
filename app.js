let user_score = 0;
let computer_score = 0;
let choices = document.querySelectorAll(".option");
let para = document.querySelector(".status");
let updateUser = document.querySelector(".user");
let updateComputer = document.querySelector(".computer");
let result = document.querySelector(".status");
let newBtn = document.querySelector(".newbtn");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
function computerChoice() {
  let comp_arr = ["Rock", "Paper", "Scissor"];
  let comp_choice = Math.floor(Math.random() * 3);

  return comp_arr[comp_choice];
  console.log(comp_arr[comp_choice]);
}
function playGame(userChoice) {
  let compChoice = computerChoice();
  if (compChoice == "Rock") {
    if (userChoice == "Rock") {
      para.innerText = "Draw";
      result.style.backgroundColor = "yellow";
      para.style.color = "black";
    } else if (userChoice == "Paper") {
      para.innerText = `User Won.${userChoice} beats ${compChoice}`;
      result.style.backgroundColor = "green";
      para.style.color = "white";
      user_score++;
    } else {
      para.innerText = `Computer Won.${compChoice} beats ${userChoice}`;
      result.style.backgroundColor = "red";
      para.style.color = "white";
      computer_score++;
    }
    if (compChoice == "Paper") {
      if (userChoice == "Rock") {
        para.innerText = `Computer Won.${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
        para.style.color = "white";
        computer_score++;
      } else if (userChoice == "Paper") {
        para.innerText = "Draw";
        result.style.backgroundColor = "yellow";
        para.style.color = "black";
      } else {
        para.innerText = `User Won.${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        para.style.color = "white";
        user_score++;
      }
    }
    if (compChoice == "Scissor") {
      if (userChoice == "Rock") {
        para.innerText = `User Won.${userChoice} beats ${compChoice}`;
        result.style.backgroundColor = "green";
        para.style.color = "white";
        user_score++;
      } else if (userChoice == "Paper") {
        para.innerText = `Computer Won.${compChoice} beats ${userChoice}`;
        result.style.backgroundColor = "red";
        para.style.color = "white";
        computer_score++;
      } else {
        para.innerText = "Draw";
        result.style.backgroundColor = "yellow";
        para.style.color = "black";
      }
    }
    console.log(userChoice);
    console.log(compChoice);
    updateUser.innerText = `${user_score}`;
    updateComputer.innerText = `${computer_score}`;
  }
}
newBtn.addEventListener("click", () => {
  updateUser.innerText = "0";
  updateComputer.innerText = "0";
  user_score = 0;
  computer_score = 0;
  result.style.backgroundColor = "black";
  para.style.color = "white";
  para.innerText = "Play Your Move";
});
