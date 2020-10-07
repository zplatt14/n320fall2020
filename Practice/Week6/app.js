let button = document.getElementById("button");

// function clicked(){
//     TweenMax.to(button, {duration:.5, height:50, backgroundColor: "#FF0000"})
//     TweenMax.to(button, {duration:2, height:5})
// }

function clicked(){
    button.classList.add("clicked");
    console.log("hello");
}
