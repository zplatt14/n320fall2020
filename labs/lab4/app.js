// // Two classes that are needed for connect four
// class connectFourBoard {
//     constructor(height, width, rows, columns) {
//         this.height = height;
//         this.width = width;
//         this.rows = rows;
//         this.columns = columns;
//     }
//     createBoard() {
//         return `
//             <svg height = "100%" width = "100%">
//                 <rect x='0' width=${this.width} height=${this.height} id="gameBoard">
//                 //function that produces circles based on number of rows and columns. 
//             </svg>

//         `;

//     }
//     checkWin() {

//     }
// }
// class blueToken {
//     constructor() {
//         this.color = "#0000ff";
//     }
//     placeToken() {

//     }

// }
// class redToken {
//     constructor() {
//         this.color = "#ff0000";
//     }
//     placeToken() {

//     }

// }
// let newConnectFourBoard = new connectFourBoard(200,300,4,3);
// let svgDiv = document.getElementById("svgDiv");
// svgDiv.innerHTML = newConnectFourBoard.createBoard();

//getting access to the board
let gameBoard = document.getElementById("gameBoard");
let x1y1 = document.getElementById("x1y1");
let x2y1 = document.getElementById("x2y1");
let x3y1 = document.getElementById("x3y1");
let x4y1 = document.getElementById("x4y1");
let x5y1 = document.getElementById("x5y1");
let x6y1 = document.getElementById("x6y1");
let x7y1 = document.getElementById("x7y1");
let x1y2 = document.getElementById("x1y2");
let x2y2 = document.getElementById("x2y2");
let x3y2 = document.getElementById("x3y2");
let x4y2 = document.getElementById("x4y2");
let x5y2 = document.getElementById("x5y2");
let x6y2 = document.getElementById("x6y2");
let x7y2 = document.getElementById("x7y2");
let x1y3 = document.getElementById("x1y3");
let x2y3 = document.getElementById("x2y3");
let x3y3 = document.getElementById("x3y3");
let x4y3 = document.getElementById("x4y3");
let x5y3 = document.getElementById("x5y3");
let x6y3 = document.getElementById("x6y3");
let x7y3 = document.getElementById("x7y3");
let x1y4 = document.getElementById("x1y4");
let x2y4 = document.getElementById("x2y4");
let x3y4 = document.getElementById("x3y4");
let x4y4 = document.getElementById("x4y4");
let x5y4 = document.getElementById("x5y4");
let x6y4 = document.getElementById("x6y4");
let x7y4 = document.getElementById("x7y4");
let x1y5 = document.getElementById("x1y5");
let x2y5 = document.getElementById("x2y5");
let x3y5 = document.getElementById("x3y5");
let x4y5 = document.getElementById("x4y5");
let x5y5 = document.getElementById("x5y5");
let x6y5 = document.getElementById("x6y5");
let x7y5 = document.getElementById("x7y5");

let clickCount = 0;
//chaning the color of the x1y1 element on click, which provides one bit of javascript interaction
function x1y1Change(){
    clickCount++;
    if (clickCount % 2 == 0){
        x1y1.style.fill = "#0000ff";
    } else{
        x1y1.style.fill = "#ff0000";
    }

}


