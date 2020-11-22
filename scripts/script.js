//get output HTML element
const output = document.getElementById("output");

// Part 1a
// Die Object
class Die{

    constructor(value){
        this.value=value;
    }
    describeSelf(){
        return `Die  is number:${this.value} `;
    }
}

// Part 2
// Die Object
class DiceRoll{

    constructor(){
        this.values = [1,2,3,4,5,6];
    
    
    }
}
// Part 2a
DiceRoll.prototype.roll = function(){

    let i,j,x, z;
    for( i=this.values.length-1; i>0; i-- ){
        //randomly select a die roll value
        j = Math.floor(Math.random() * (i+1));
        x=this.values[j];
        return z= output.innerHTML += `<p> ${x}`;
    }
}

// Part 2b
DiceRoll.prototype.describeSelf = function(){
    //let output = "";
    output.innerHTML += `<p>Dice rolled a number `;
    
}


//Test instantiate Die object and display value
const myDie = new Die(6);

output.innerHTML += `${myDie.describeSelf()}`;
//Test instantiate DiceRoll object
const myDiceRoll = new DiceRoll();

myDiceRoll.describeSelf();
myDiceRoll.roll();