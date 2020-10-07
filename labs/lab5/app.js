//getting the small square classes and other elemetns on screen
let smallSquares = document.getElementsByClassName("smallSquare");
let otherElements = document.getElementsByClassName("fadeIn");
let x1y1 = document.getElementById("x1y1");
let x2y1 = document.getElementById("x2y1");
let x3y1 = document.getElementById("x3y1");
let x1y2 = document.getElementById("x1y2");
let x2y2 = document.getElementById("x2y2");
let x3y2 = document.getElementById("x3y2");


//fade elements on screen in
TweenMax.from(smallSquares,{duration:4, alpha:0})
TweenMax.from(otherElements,{duration:4, alpha:0})

//only run mouseover once
let x1y1count = 0;
let x2y1count = 0;
let x3y1count = 0;
let x1y2count = 0;
let x2y2count = 0;
let x3y2count = 0;

//mouse over gallery elements
function squarex1y1(){
    if(x1y1count < 1){
        TweenMax.to(x1y1,{duration:.1, alpha:.5})
        console.log("h");
    }
    x1y1count++;
    console.log(x1y1count);
}
function squarex2y1(){
    if(x2y1count < 1){
        TweenMax.to(x2y1,{duration:.1, alpha:.5})
    }
    x2y1count++;
    
}
function squarex3y1(){
    if(x3y1count < 1){
        TweenMax.to(x3y1,{duration:.1, alpha:.5})
    }
    x3y1count++;
}
function squarex1y2(){
    if(x1y2count < 1){
        TweenMax.to(x1y2,{duration:.1, alpha:.5})
    }
    x1y2count++;
}
function squarex2y2(){
    if(x2y2count < 1){
        TweenMax.to(x2y2,{duration:.1, alpha:.5})
    }
    x2y2count++;
}
function squarex3y2(){
    if(x3y2count < 1){
        TweenMax.to(x3y2,{duration:.1, alpha:.5})
    }
    x3y2count++;
}
//on click functions for gallery elements
function squarex1y1Click(){
    TweenMax.to(x1y1,{duration:.7, height:"250px", width: "400px", alpha:0})
    console.log("h");
}
function squarex2y1Click(){
    TweenMax.to(x2y1,{duration:.7, height:"250px", width: "400px", alpha:0})
}
function squarex3y1Click(){
    TweenMax.to(x3y1,{duration:.7, height:"250px", width: "400px", alpha:0})
}
function squarex1y2Click(){
    TweenMax.to(x1y2,{duration:.7, height:"250px", width: "400px", alpha:0})
}
function squarex2y2Click(){
    TweenMax.to(x2y2,{duration:.7, height:"250px", width: "400px", alpha:0})
}
function squarex3y2Click(){
    TweenMax.to(x3y2,{duration:.7, height:"250px", width: "400px", alpha:0})
}