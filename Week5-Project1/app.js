// Current Round and Win conditions
let playerTurn = true;

// Generate one alien
const generateAlien = () => {
    let enemy = {
        hull: 100,
        firepower: 2 + parseInt(Math.random()*3),
        accuracy: Number(0.6 + 0.2*Math.random()).toFixed(2),
        attack() {
            if (Math.random() <= this.accuracy) {
                player.hull -= this.firepower;
                console.log('attack Hit')
            } else {
                console.log('attack missed')
            }
            updateScreen();
        },
    }
    return enemy
}
// Generate 3-9 aliens
const generateAliensArray = () => {
    let numEnemies = 3 + parseInt(Math.random() * 5);
    let hoarde =[];
    console.log('Number of enemies',numEnemies)
    for (let i=0;i<=numEnemies;i++) {
        hoarde.push(generateAlien())
    }
    return hoarde
}

// Instantiate player, hoarde and alien
let player = {
    hull:200,
    firepower: 5,
    accuracy: 0.7,
    attack() {
        if (Math.random() <= this.accuracy) {
            alien.hull -= this.firepower;
            console.log('attack Hit')
        } else {
            console.log('attack missed')
        }
        updateScreen();
    },
    shield() {
        if (Math.random() <= 0.50) {
            this.hull += 20;
            console.log('Shield up')
        } else {
            console.log('No shield')
        }
        updateScreen();
    },
    bomb() {
        if (Math.random() <= 0.50) {
            alien.hull -= 50;
            console.log('Bombs hit')
        } else {
            console.log('bombs missed')
        }
        updateScreen();
    },
    retreat() {
        console.log('RETREAT! Game Over!')
        alert('RETREAT! game Over! Press OKay to start a new game.')
        open('index.html')
    }
}

let hoarde = generateAliensArray();
let alien = hoarde.pop();
console.log('Hoarde of aliens', hoarde)

const playerDiv = document.querySelector('.player');
const alienDiv = document.querySelector('.alien');
const menuButton = document.querySelector('.actions-menu');

const updateScreen = () => {
    playerDiv.querySelector('.player-hull').innerHTML = player.hull
    playerDiv.querySelector('.player-firepower').innerHTML = player.firepower
    playerDiv.querySelector('.player-accuracy').innerHTML = player.accuracy

    alienDiv.querySelector('.alien-hull').innerHTML = alien.hull
    alienDiv.querySelector('.alien-firepower').innerHTML = alien.firepower
    alienDiv.querySelector('.alien-accuracy').innerHTML = alien.accuracy
}

menuButton.addEventListener('click', () => {
    menuButton.parentElement.parentElement.querySelector('.actions').classList.toggle('hidden');
})

updateScreen()

//TODO: Build out the flow of the game between rounds and turns.

//TODO: Add styling to the page
// Character icons
// Background images and animations