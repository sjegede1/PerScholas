class Cat {
    constructor (name,eyeColor) {
        this.name = name;
        this.numLegs = 4;
        this.eyeColor = eyeColor;
    }
    
    speak() {
        console.log("Meow!")
    }

    scratch() {
        console.log('Ouch!!')
    }
    // isThereAMouse is a boolean if.e T/F
    findMouse(isThereAMouse) {
        if (isThereAMouse) {
            console.log(`${this.name} killed Jerry`)
        } else {
            console.log(`${this.name} didn't find anything`)
        }
    }
}

let tom = new Cat('Tom','brown')
let bob = new Cat('Bob','green')

console.log(tom.name)
console.log(bob,'\n')

tom.speak()
tom.scratch()
tom.findMouse(false)

tom.speak()
tom.scratch()
tom.findMouse(true)
console.log('\n')


class Pirate {
    constructor(name,shipCrew,swordLength){
        this.name = name;
        this.shipCrew = shipCrew;
        this.swordLength = swordLength;
    }
    // enemyCrew is an int that tells you how many people are in an enemy Crew
    fight(enemyCrew) {
        if (this.shipCrew > enemyCrew) {
            console.log('My crew won')
        } else if (this.shipCrew < enemyCrew) {
            console.log('My crew lost')
        } else {
            console.log('It was a draw')
        }
    }

    speak() {
        console.log('Aaaargh!')
    }

    // isThereTreasur is a boolean T/F that tells you if there's treasure buried
    dig(isThereTreasure) {
        if (isThereTreasure) {
            console.log("I found treasure!! I'm rich!!")
        } else {
            console.log('Try again next time')
        }
    }
}

let blackBeard  = new Pirate('Black Beard',100,2)
let redBeard = new Pirate('Red Beard',50,1.5)
let johnJames = new Pirate('John James',250,1)

let jackSparrow = new Pirate('Jack Sparrow',150,1);
let hectorBarbosa = new Pirate('Hector Barbosa',150,1.5);
let davyJones = new Pirate('Davy Jones',300,3);

                  // 0          1           2
let jollyRoger = [blackBeard,redBeard,johnJames];
let blackPearl = [jackSparrow,hectorBarbosa,davyJones];

for (let i=0; i<jollyRoger.length; i++) {
    console.log(jollyRoger[i].name, jollyRoger[i].shipCrew, jollyRoger[i].swordLength)

    console.log(blackPearl[i].name, blackPearl[i].shipCrew, blackPearl[i].swordLength)
}

// console.log(jollyRoger[0].name)

// i: 0,1,2 (3)
// name,shipCrew,swordLength

// arr = [sola, mital,jordan,sabrina, jenna]
// sola = {name: 'Sola', points:99}

// for (loop stuff;i++) {
//     if (arr[i].points >= 100) {
//         giveDiscount()
//     }
// }