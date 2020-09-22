//class that creates the vending machine
class VendingMachine{
    constructor(firstCandy,secondCandy,firstChips){
        this.firstCandy = firstCandy;
        this.secondCandy = secondCandy;
        this.firstChips = firstChips;
        this.firstCandyCount = 10;
        this.secondCandyCount = 10;
        this.firstChipsCount = 10;
    }
    //template that renders the product names with the inventory in html
    render(){
        return `
            <div>${this.firstCandy}</div>
            <div>${this.firstCandyCount}</div>
            <div>${this.secondCandy}</div>
            <div>${this.secondCandyCount}</div>
            <div>${this.firstChips}</div>
            <div>${this.firstChipsCount}</div>
            `;
    }
    //functions that subtract 1 from each product if inventory is greater than 0
    orderFirstCandy(){
        if(this.firstCandyCount > 0){
            this.firstCandyCount --;
            console.log("orderFirstCandy ran");
        }
    }
    orderSecondCandy(){
        if(this.secondCandyCount > 0){
            this.secondCandyCount --;
            console.log("orderSecondCandy ran");
        }
    }
    orderFirstChips(){
        if(this.firstChipsCount > 0){
            this.firstChipsCount --;
            console.log("orderFirstChips ran");
        }
    }
    

}
//putting the vending machine into the html
let newVendingMachine = new VendingMachine("Kit Kat", "Snickers", "Doritos");
let vendingMachineDiv = document.getElementById("vendingMachineDiv");
vendingMachineDiv.innerHTML = newVendingMachine.render();

//functions for when user orders an intem
function buyFirstCandy(){
    newVendingMachine.orderFirstCandy();
    vendingMachineDiv.innerHTML = newVendingMachine.render();
}
function buySecondCandy(){
    newVendingMachine.orderSecondCandy();
    vendingMachineDiv.innerHTML = newVendingMachine.render();

}
function buyfirstChips(){
    newVendingMachine.orderFirstChips();
    vendingMachineDiv.innerHTML = newVendingMachine.render();

}
