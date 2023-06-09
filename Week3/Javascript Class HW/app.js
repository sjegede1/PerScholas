// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price

class Hamster {
  constructor(name) {
    this.owner = "";
    this.name = name;
    this.price = 15;
  }

  wheelRun() {
    console.log("squeak squeak");
  }

  eatFood() {
    console.log("nibble nibble");
  }

  getPrice() {
    return this.price;
  }
}

names = ['Tope','Sola','Jordan','Huang']
ages =[0,1,2,3]


// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:

// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Person {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getWeight() {
    return this.Weight;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }

  eat() {
    this.weight++;
    this.mood++;
  }

  exercise() {
    this.weight--;
  }

  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// 1. Instantiate a new Person named Timmy
const timmy = new Person('Timmy');

// 2. Timmy aging 5 years
timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();
console.log(timmy)
// 3. Timmy eating 5 times
timmy.eat();timmy.eat();timmy.eat();timmy.eat();timmy.eat();
console.log(timmy)
// 4. Timmy exercise 5 times
timmy.exercise();timmy.exercise();timmy.exercise();timmy.exercise();timmy.exercise();

// 5. Age Timmy 9 years
timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();timmy.ageUp();

// 6. Create a hamster named "Gus"
const gus = new Hamster('Gus');

// 7. Set Gus's owner to the string "Timmy"
gus.owner = timmy.getName()

// 8.Have Timmy "buy" Gus
timmy.buyHamster(gus)

// 9. Age Timmy 15 years
for (let i=0; i<15;i++) {
    timmy.ageUp()
}

// 10. Have Timmy eat twice
timmy.eat(); timmy.eat()

// 11. Have Timmy exercise twice
timmy.exercise(); timmy.exercise()

console.log(timmy)
console.log(gus)


class Dinner {
    constructor() {
        this.appetizer = 'Fries';
        this.entree = 'Burger';
        this.dessert = 'Apple Pie';
    }
}

class Chef extends Dinner {
    makeNewDinner(appetizer,entree,dessert) {
        super.appetizer = appetizer;
        super.entree = entree;
        super.dessert = dessert;
        return this
    }
}

let chef1 = new Chef()
console.log(chef1)
let naijaDinner = ['Small Chops','Jollof Rice','Puff Puff']
console.log(chef1.makeNewDinner(...naijaDinner))