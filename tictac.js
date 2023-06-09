var board;
var playerO = 'o';
var playerX = 'x';
var currPlayer = playerO;
var gameOver = false;

window.onload = function (){
    startGame()
};
function startGame () {
board = [
    ['','',''],
    ['','',''],
    ['','','']
];

for (let r = 0; r < 3; r++ ){
    for (let c = 0; c < 3; c++){
        let tile = document.createElement ('div');
        tile.id = r.toString() + '-' + c.toString();
        tile.classList.add ('tile');
        if (r == 0 || r == 1){
            tile.classList.add ('horline');
        }
        if (c == 0 || c == 1){
            tile.classList.add ('verline')
        }
            document.getElementById('board').append(tile)
            tile.addEventListener ('click', setTile)
        }
}
}

function setTile (){
    let coords = this.id.split('-');
let r = parseInt(coords[0]);
let c = parseInt(coords[1]);
if (gameOver){
    return
}

if (board[r][c] != ''){
    return
}else{
board[r][c] = currPlayer;
this.innerText = currPlayer;}
if (currPlayer == playerO){
    currPlayer = playerX
}
else {
    currPlayer = playerO;
}
checkWin();
}

function checkWin() {
//hor line
for (let r = 0; r < 3; r++){
if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ''){
     for (let i = 0; i < 3; i++){    
    let tile = document.getElementById(r.toString()+'-'+i.toString()) 
    tile.classList.add('winner') 
    }
    gameOver = true;
    return;
}
}
//verline
if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != '')
{
    for (let i = 0; i < 3; i++){    
        let tile = document.getElementById(i.toString()+'-'+c.toString()) 
        tile.classList.add('winner') 
        }
        gameOver = true;
        return;

}
//diago
if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '')
{
    for (let i = 0; i < 3; i++){    
        let tile = document.getElementById(i.toString()+'-'+i.toString()) 
        tile.classList.add('winner') 
        }
        gameOver = true;
        return;

}
if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '')
{
   let tile = document.getElementById('0-2') 
        tile.classList.add('winner') 

    tile = document.getElementById('1-1') 
    tile.classList.add('winner') 


    tile = document.getElementById('2-0') 
        tile.classList.add('winner') 

        gameOver = true;
        return
}

}