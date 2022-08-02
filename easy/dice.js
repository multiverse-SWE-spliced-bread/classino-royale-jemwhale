// write your classes:

class Die {
    constructor (sides){
        if (sides >= 4 && sides <= 20){
            this.sides = sides;
        }else{
            throw new Error('sides must be greater than 3 and less than 21');
        }
    }
    roll(){
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

class Cup {
    constructor(dice){
        this.dice = dice;
    }
    spill(){
        let newArr = []
        for (let i in this.dice){
            newArr.push(this.dice[i].roll());
        }
        return newArr;
    }
}


// test your classes with console.log
// to show they work as intended:

const die1 = new Die(4);
const die2 = new Die(10);
const die3 = new Die(6);
console.log(die1.roll());

let dice = [die1,die2,die3]
const cup = new Cup(dice);
console.log(cup.spill());

