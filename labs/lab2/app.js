//base instrument class
class Instrument {
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }
    playInstrument(){

        console.log(this.family + " " + this.verb + " at this volume: "+ this.loudness);

    }

} 
//Woodwind class that extends instrument. Takes a custom loudness to pass up to super constructor
class Woodwind extends Instrument {
    constructor(loudness){
        super(loudness)
        this.family = "Woodwind";
        this.verb = "plays";

    }
}
//Percussion class that extends instrument. Takes a custom loudness to pass up to super constructor
class Percussion extends Instrument {
    constructor(loudness){
        super(loudness)
        this.family = "Percussion";
        this.verb = "Bangs";
    }
}
//Percussion class that extends instrument. Takes a custom loudness to pass up to super constructor
class Stringed extends Instrument {
    constructor(loudness){
        super(loudness)
        this.family = "Stringed";
        this.verb = "Strums";
    }
}
//instances of each child class
let flute = new Woodwind(45);
let drum = new Percussion(100);
let guitar = new Stringed(60);

//array of instrument elements
let myInstruments = [flute, drum, guitar];

//loop that plays the instruments
myInstruments.forEach((instrument) => {
    instrument.playInstrument();
})
