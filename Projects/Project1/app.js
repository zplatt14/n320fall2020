//class for the tic tac toe squares
class ticTacToeSquare {
    constructor() {
        this.fill = null;
    }
}
class player{
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
}
//class for the overall game of Tic Tac Toe
class ticTacToe extends player {
    constructor(player1,player2) {
        super(player1, player2)
        this.gameRunning = true;
        this.gameWinner = null;
        this.O = "0";
        this.X = "X";
        this.playerTurn = this.O;
        this.movesCount = 0;
        //ticTacToeSquare is related here
        this.squares = new Array(9).fill().map(s => new ticTacToeSquare());

    }
    //method for player move
    playerMove(i) {
        //if the game is running and the square is not filled
        if (this.gameRunning && !this.squares[i].value) {
            this.squares[i].fill = this.playerTurn;

            this.movesCount++;
            this.checkWin();
            //changes turns
            if (this.movesCount % 2 == 0) {
                this.playerTurn = this.O;
            } else {
                this.playerTurn = this.X;
            }
        }
        console.log(newGame.playerTurn);
    }
    //method that checks for a win
    checkWin() {
        let winningCombos = [
            //these are numbers that reference the squares on the grid
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        //checks each of the winning combinations after each turn
        winningCombos.forEach((winningCombo) => {

            //seperating the array of square numbers into individual values
            let [a, b, c] = winningCombo;
            let aSquare = this.squares[a];
            let bSquare = this.squares[b];
            let cSquare = this.squares[c];

            //checks if any of the winning combinations exist with same symbol of x or o
            if (aSquare.fill && aSquare.fill === bSquare.fill && aSquare.fill === cSquare.fill) {
                this.gameRunning = false;

                if(aSquare.fill === "0"){
                    this.gameWinner = this.player1;
                    console.log(this.gameWinner);
                }
                if(aSquare.fill === "X"){
                    this.gameWinner = this.player2;
                    console.log(this.gameWinner);
                }
            }


        });


        //if there is no win, check for a tie
        if (this.movesCount === 9) {
            //all 9 squares are filled up so game is over and winner becomes null
            this.gameRunning = false;
        }
    }


}


let newGame = new ticTacToe("Zach","Travis");

//vue component that passes the winner to the info bar
Vue.component("info-view", {
    props: ["gameWinner"],
    template: "<span>Congratulations {{gameWinner}} has won!</span>"
})
//new vue to get newGame object to the HTML
let newVue = new Vue({
    el: '#game-view',
    data: newGame
});

//making SVG boxes dissapear on click

//getting each of the squares by ID
let svgSquares = document.getElementsByClassName("svgSquares");
for (var i = 0; i < svgSquares.length; i++) {
    svgSquares[i].id = "svgSquare" + (i + 1);
}
let sq1 = document.getElementById("svgSquare1");
let sq2 = document.getElementById("svgSquare2");
let sq3 = document.getElementById("svgSquare3");
let sq4 = document.getElementById("svgSquare4");
let sq5 = document.getElementById("svgSquare5");
let sq6 = document.getElementById("svgSquare6");
let sq7 = document.getElementById("svgSquare7");
let sq8 = document.getElementById("svgSquare8");
let sq9 = document.getElementById("svgSquare9");

//having the boxes dissapear and click counts
let sq1cc = 0;
let sq2cc = 0;
let sq3cc = 0;
let sq4cc = 0;
let sq5cc = 0;
let sq6cc = 0;
let sq7cc = 0;
let sq8cc = 0;
let sq9cc = 0;

sq1.onclick = function () {
    TweenMax.to(sq1, { duration: .7, alpha: 0 })
    sq1cc++;
    return sq1cc;
};
sq2.onclick = function () {
    TweenMax.to(sq2, { duration: .7, alpha: 0 })
    sq2cc++;
};
sq3.onclick = function () {
    TweenMax.to(sq3, { duration: .7, alpha: 0 })
    sq3cc++;
};
sq4.onclick = function () {
    TweenMax.to(sq4, { duration: .7, alpha: 0 })
    sq4cc++;
};
sq5.onclick = function () {
    TweenMax.to(sq5, { duration: .7, alpha: 0 })
    sq5cc++;
};
sq6.onclick = function () {
    TweenMax.to(sq6, { duration: .7, alpha: 0 })
    sq6cc++;
};
sq7.onclick = function () {
    TweenMax.to(sq7, { duration: .7, alpha: 0 })
    sq7cc++;
};
sq8.onclick = function () {
    TweenMax.to(sq8, { duration: .7, alpha: 0 })
    sq8cc++;
};
sq9.onclick = function () {
    TweenMax.to(sq9, { duration: .7, alpha: 0 })
    sq9cc++;
}
//mouseover and mouseout functions for squares
sq1.onmouseover = function () {
    if (sq1cc < 1) {

        TweenMax.to(sq1, { duration: .1, alpha: .5 })

    }
};
sq1.onmouseout = function () {
    if (sq1cc < 1) {
        TweenMax.to(sq1, { duration: .1, alpha: 1 })
    }
};
sq2.onmouseover = function () {
    if (sq2cc < 1) {
        TweenMax.to(sq2, { duration: .1, alpha: .5 })
    }
};
sq2.onmouseout = function () {
    if (sq2cc < 1) {
        TweenMax.to(sq2, { duration: .1, alpha: 1 })
    }
};
sq3.onmouseover = function () {
    if (sq3cc < 1) {
        TweenMax.to(sq3, { duration: .1, alpha: .5 })
    }
};
sq3.onmouseout = function () {
    if (sq3cc < 1) {
        TweenMax.to(sq3, { duration: .1, alpha: 1 })
    }
};
sq4.onmouseover = function () {
    if (sq4cc < 1) {
        TweenMax.to(sq4, { duration: .1, alpha: .5 })
    }
};
sq4.onmouseout = function () {
    if (sq4cc < 1) {
        TweenMax.to(sq4, { duration: .1, alpha: 1 })
    }
};

sq5.onmouseover = function () {
    if (sq5cc < 1) {
        TweenMax.to(sq5, { duration: .1, alpha: .5 })
    }
};
sq5.onmouseout = function () {
    if (sq5cc < 1) {
        TweenMax.to(sq5, { duration: .1, alpha: 1 })
    }
};
sq6.onmouseover = function () {
    if (sq6cc < 1) {
        TweenMax.to(sq6, { duration: .1, alpha: .5 })
    }
};
sq6.onmouseout = function () {
    if (sq6cc < 1) {
        TweenMax.to(sq6, { duration: .1, alpha: 1 })
    }
};
sq7.onmouseover = function () {
    if (sq7cc < 1) {
        TweenMax.to(sq7, { duration: .1, alpha: .5 })
    }
};
sq7.onmouseout = function () {
    if (sq7cc < 1) {
        TweenMax.to(sq7, { duration: .1, alpha: 1 })
    }
};
sq8.onmouseover = function () {
    if (sq8cc < 1) {
        TweenMax.to(sq8, { duration: .1, alpha: .5 })
    }
};
sq8.onmouseout = function () {
    if (sq8cc < 1) {
        TweenMax.to(sq8, { duration: .1, alpha: 1 })
    }
};
sq9.onmouseover = function () {
    if (sq9cc < 1) {
        TweenMax.to(sq9, { duration: .1, alpha: .5 })
    }
};
sq9.onmouseout = function () {
    if (sq9cc < 1) {
        TweenMax.to(sq9, { duration: .1, alpha: 1 })
    }
};
