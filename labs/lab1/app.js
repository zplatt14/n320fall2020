class RainDrop {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = 5 + Math.random() * 2;
        this.count = 0;
    }

    fall() {
        fill(this.color);

        this.y = this.y + this.speed;

        circle(this.x, this.y, this.radius)

    }
}


var drop = [];
drop[0] = new RainDrop(100, 10, 100, [66, 135, 245]);
drop[1] = new RainDrop(300, 10, 100, [38, 101, 201]);
drop[2] = new RainDrop(500, 10, 100, [14, 55, 120]);
class Ground {
    constructor(x, y, blue) {
        this.x = x;
        this.y = y;
        this.blue = blue;
        this.dropCount = 0;
    }
    colorChange() {

            this.blue = this.blue + 50;
            this.color = [0, 0, this.blue];
            fill(this.color);
            console.log(this.color);
            console.log(this.blue);

    }
    create() {
        fill(0, 0, this.blue);
        rect(0, 500, this.x, this.y);
    }

}

var groundFloor = new Ground(600, 100, 12.5);


function setup() {
    createCanvas(600, 600);
}
function draw() {


    background(205, 207, 209)

    drop[0].fall();
    drop[1].fall();
    drop[2].fall();
    groundFloor.create();
    let totalDropCount = drop[0].count + drop[1].count + drop[2].count;
    console.log(totalDropCount);

    if (drop[0].y >= groundFloor.x) {
        drop[0].y = 10;
        drop[0].count++;
        if (totalDropCount % 10 === 0 && totalDropCount > 0 && groundFloor.blue < 255) {
            groundFloor.colorChange();
        }
    }
    if (drop[1].y >= groundFloor.x) {
        drop[1].y = 10;
        drop[1].count++;
        if (totalDropCount % 10 === 0 && totalDropCount > 0 && groundFloor.blue < 255) {
            groundFloor.colorChange();
        }
    }
    if (drop[2].y >= groundFloor.x) {
        drop[2].y = 10;
        drop[2].count++;
        if (totalDropCount % 10 === 0 && totalDropCount > 0 && groundFloor.blue < 255) {
            groundFloor.colorChange();
        }
    }
}