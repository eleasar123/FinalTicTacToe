$(document).ready(function(){
createCells();
var playerOne= true;
var gameWinner = false;
let twoPlayersId = {
    PlayerX: [],
    PlayerO: []
};
var cellLength=0;
var playerTurn=document.getElementById('playerTurn');
var button=document.getElementById("restartGame");
button.addEventListener('click', restartGame);
    console.log( "ready!" );
function restartGame(){
   console.log("Game is restarted")
}

function createCells() {
    let length=9;
    let parentDiv = document.getElementById("gameTable");
    console.log("successful");
    for(i=0;i<length;i++){
        let childDiv = document.createElement("div");
        childDiv.className = "cellData";
        childDiv.id = i;
        childDiv.addEventListener("click", cellClicked);

    parentDiv.appendChild(childDiv);
    }
}
function cellClicked(event) {
    console.log(event);
    let id = event.target.id;
    let cell = document.getElementById(id);
    console.log(cell);
    cell.removeEventListener("click", cellClicked);
    if (playerOne) {
       console.log(playerOne);
      if (gameWinner==false) {
        console.log(gameWinner);
        cell.style ="background-image: url('Photos/ticTacToeX.png')"; 
        console.log(cell.style);
        playerTurn.innerHTML = "Player 2 turn!";
        twoPlayersId.PlayerX.push(id);
        playerOne = !playerOne;
        checkWin(twoPlayersId.PlayerX, "Player 1 win");
      }
    } else {
      // console.log("Player2");
      if (gameWinner==false) {
        cell.style = "background-image: url('Photos/ticTacToeO.png')" ;
        playerTurn.innerHTML = "Player 1 turn!";
        playerOne = !playerOne;
        twoPlayersId.PlayerO.push(id);
        checkWin(twoPlayersId.PlayerO, "Player 2 win");
      }
    }
}

cellLength = twoPlayersId.PlayerX.length + twoPlayersId.PlayerO.length;

  if (gameWinner == false) {
    if (cellLength >= 9) {
      alert("The Game is Tied! Please restart a new game");
    }
  }

function checkWin(playersId, player) {
  let winningCombos = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],

    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],

    ["0", "4", "8"],
    ["2", "4", "6"]
  ];
}
});