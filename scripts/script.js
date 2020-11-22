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

//Test instantiate Die object and display value
const myDie = new Die(6);

output.innerHTML += `${myDie.describeSelf()}`;
