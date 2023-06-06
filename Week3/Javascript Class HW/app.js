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
        console.log('squeak squeak')
    }

    eatFood() {
        console.log('nibble nibble')
    }

    getPrice() {
        return this.price
    }
}


