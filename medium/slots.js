// write your classes:

class Player{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    play(machine){
        
        if (machine.cost > this.balance){
            console.log('Your balance is' + this.balance +'. This machine costs ' + machine.costToPlay + ' to play! Sorry!')
            return
        }
        let winnings = machine.spin()
        this.balance -= machine.costToPlay
        this.balance += winnings;
        console.log('You have won ' + winnings)
        console.log('Your remaining balance is ' + this.balance)
    }
}

class Machine {
    constructor(costToPlay, smallPayout, bigPayout){
        this.costToPlay = costToPlay;
        this.smallPayout = smallPayout;
        this.bigPayout = bigPayout;
    }
    spin(){
        const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        let str = ''
        for (let i=0; i<3; i++){
        str += arr[Math.floor(Math.random() * 25)];
        }
        console.log(str)
        if(str[0] === str[1] && str[1] === str[2]){
            return this.bigPayout
        }else if(str[0] === str[1] || str[1] === str[2] || str[0] === str[2]){
            return this.smallPayout
        }else{
            return 0
        }
    }
}

// test your classes with console.log
// to show they work as intended:

const machine = new Machine(2, 10, 100);
const player = new Player('Jack', 20);
player.play(machine); 

