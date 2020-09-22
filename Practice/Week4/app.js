var car = {Make:"Honda", Model:"Civic"};

let carString = `
<h2> Make: ${car.Make} 
Model: ${car.Model}</h2>
`
let div = document.createElement("div");
div.innerHtml = carString;
document.body.appendChild(div);