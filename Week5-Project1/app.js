// Current Round and Win conditions
let playerTurn = true; // true is player turn, false is alien turn
let gameOver = 0; //-1 game hasn't started yet, 0 is ongoing game, 1 is game win, 2 is gmae lose, 3 is game retreat
let alienIsDead = 0; //0 alien is alive, 1 alien is dead switch alien
let nextRound = 0; //0 stay on this round, 1 move to next round

// Generate random number between min and max
const randomNumberBetween = (min,max) => {
    return parseInt(Math.random()*(max-min)) + min
}

// Generate one alien
const generateAlien = () => {
    let enemy = {
        hull: 4,
        //firepower ranges between 2 and 4
        firepower: randomNumberBetween(2,4), 
        // accuracy is between 0.6 and 0.8
        accuracy: randomNumberBetween(6,8)/10,
        attack() {
            if (Math.random() <= this.accuracy) {
                player.hull -= this.firepower;
                console.log('alien attack Hit')
            } else {
                console.log('alien attack missed')
            }
            updateScreen();
            vegeta.classList = "player-img";
            frieza.classList.toggle('frieza-attack')
        },
    }
    return enemy
}
// Generate 3-9 aliens
const generateAliensArray = () => {
    // random number fo enemies between 4 and 8
    let numEnemies = randomNumberBetween(4,8);
    let hoarde =[];
    let currentAlien;
    console.log('Number of enemies',numEnemies)
    for (let i=0;i<=numEnemies;i++) {
        currentAlien = generateAlien();
        currentAlien.name = `Alien ${i+1} of ${numEnemies}`
        hoarde.push(currentAlien)
    }
    return hoarde.reverse()
}

// Instantiate player, hoarde and alien
let player = {
    hull:200,
    firepower: 5,
    accuracy: 0.7,
    attack(cheat) {
        cheat ? alien.hull = 0 : {};
        if (Math.random() <= this.accuracy) {
            alien.hull -= this.firepower;
            console.log('attack Hit')
        } else {
            console.log('attack missed')
        }
        updateScreen();
        disablePlayerButtons();
        playerTurn = 0;
        enableNextTurnButton();
        vegeta.classList = "player-img vegeta-attack"
        frieza.classList = "alien-img"
    },
    shield() {
        if (Math.random() <= 0.50) {
            this.hull += 20;
            console.log('Shield up')
        } else {
            console.log('No shield')
        }
        updateScreen();
        disablePlayerButtons();
        playerTurn = 0;
        enableNextTurnButton();
        vegeta.classList = "vegeta-shield";
        frieza.classList = "alien-img";
    },
    bomb() {
        if (Math.random() <= 0.50) {
            alien.hull -= 50;
            console.log('Bombs hit')
        } else {
            console.log('bombs missed')
        }
        updateScreen();
        disablePlayerButtons();
        playerTurn = 0;
        enableNextTurnButton();
        vegeta.classList = "player-img vegeta-bomb"
        frieza.classList = "alien-img"
    },
    retreat() {
        console.log('RETREAT! Game Over!')
        let retreatPrompt = prompt('RETREAT! If you want to retreat enter "YES"');
        if (retreatPrompt=='YES') {
            alert('GAME OVER!')
            location.reload()
        } 
        
    }
}

let hoarde = generateAliensArray();
let alien = hoarde.pop();
console.log('Hoarde of aliens', hoarde)

const playerDiv = document.querySelector('.player');
const alienDiv = document.querySelector('.alien');
const menuButton = document.querySelector('.actions-menu');

const vegeta = document.querySelector('.player-img')
const frieza = document.querySelector('.alien-img')

const alienHurt = () => {
    frieza.classList = "alien-img frieza-hurt"
}

const updateAlien = () => {
    if (hoarde.length>1) {
        alien = hoarde.pop()
    } else {
        console.log('all aliens have been defeated')
        gameOver = 1;
    }
}

const disableNextTurnButton = () => {
    document.querySelector('.next-turn').disabled = 1;
}

const enableNextTurnButton = () => {
    document.querySelector('.next-turn').disabled = 0;
}

const disablePlayerButtons = () => {
    playerDiv.querySelectorAll('button').forEach(element => element.disabled = 1);
    playerDiv.querySelector('.retreat').disabled = 0;
}

const enablePlayerButtons = () => {
    playerDiv.querySelectorAll('button').forEach(element => element.disabled = 0);
    playerDiv.querySelector('.retreat').disabled = 1;
}

const nextTurn = () => {
    if (hoarde.length==1) {
        gameOver = 1;
        alienHurt()
        //TODO: Dont' use alert so we can see the final Frieza GIF
        alert("CONGRATULATIONS! You've saved the world!!")
        location.reload()
    } else if (alien.hull<=0 && hoarde.length) {
        alert('THIS ROUND IS OVER!\n You defeated this alien but the next one is coming')
        updateAlien()
        updateScreen()
        enablePlayerButtons()
    } else {
        enablePlayerButtons()
        alert('This alien is still here fight him again')
    }
    alien.attack()
    disableNextTurnButton();
    console.log('Next Turn Button');
}

const updateScreen = () => {
    playerDiv.querySelector('.player-hull').innerHTML = player.hull
    playerDiv.querySelector('.player-firepower').innerHTML = player.firepower
    playerDiv.querySelector('.player-accuracy').innerHTML = player.accuracy

    alienDiv.querySelector('h2').innerHTML = alien.name;
    alienDiv.querySelector('.alien-hull').innerHTML = alien.hull
    alienDiv.querySelector('.alien-firepower').innerHTML = alien.firepower
    alienDiv.querySelector('.alien-accuracy').innerHTML = alien.accuracy
}

menuButton.addEventListener('click', () => {
    menuButton.parentElement.parentElement.querySelector('.actions').classList.toggle('hidden');
})

updateScreen()

//TODO: Build out the flow of the game between rounds and turns.
//START GAME TODO: Later


//TODO: Add styling to the page
// Character icons
// Background images and animations

//TODO: QoL improvements
// Balance attacks and specials.
// Create different types of attackers

