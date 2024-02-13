let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

//Function to check for a win
const checkWin = () => {
  let textInsideBox = document.querySelectorAll(".boxtext");

  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      textInsideBox[e[0]].innerText === textInsideBox[e[1]].innerText &&
      textInsideBox[e[2]].innerText === textInsideBox[e[1]].innerText &&
      textInsideBox[e[0]].innerText !== ""
    ) {
      isGameOver = true;
      gameOver.play();
      document.querySelector(".info").innerText =
        textInsideBox[e[0]].innerText + " Won";
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
    }
  });
};

//Game Logic :-
// music.play();
let boxes = document.querySelectorAll(".box"); //document.getElementsByClassName("box")
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext"); // Select boxtext of that particular box(i.e.element)

  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      //Every time user clicks on a box this ting music will play.
      turn = changeTurn();
      turnMusic.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//Add onclick listener to reset button

// let reset = document.getElementById("reset");    //No need for this line bcoz reset is an id (this is my logic).

reset.addEventListener("click", () => {
  let textInsideBox = document.querySelectorAll(".boxtext");

  Array.from(textInsideBox).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;

  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0";
});
