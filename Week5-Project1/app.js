// Current Round and Win conditions
let playerTurn = true; // true is player turn, false is alien turn
let gameOver = 0; //-1 game hasn't started yet, 0 is ongoing game, 1 is game win, 2 is gmae lose, 3 is game retreat
let alienIsDead = 0; //0 alien is alive, 1 alien is dead switch alien
let nextRound = 0; //0 stay on this round, 1 move to next round
let  alienColors = ['orange','blue','red','green','yellow','purple','gold','pink']

// Generate random number between min and max
const randomNumberBetween = (min,max) => {
    return parseInt(Math.random()*(max-min)) + min
}

// Generate one alien
const generateAlien = () => {
    let enemy = {
        hull: randomNumberBetween(3,6),
        //firepower ranges between 2 and 4
        firepower: randomNumberBetween(2,4), 
        // accuracy is between 0.6 and 0.8
        accuracy: randomNumberBetween(6,8)/10,
        attack() {
            if (Math.random() <= this.accuracy) {
                player.hull -= this.firepower;
                console.log('Alien Attack Hit')
                turnInfo.innerHTML = "FRIEZA HURT GOKU!!"
            } else {
                console.log('Alien attack missed')
                turnInfo.innerHTML = "HA! FRIEZA MISSED THAT ONE!"
            }
            updateScreen();
            frieza.classList = "alien-img frieza-whip-alien";
            friezaProjectile.classList = "alien-projectile frieza-whip-projectile";
            goku.classList = "player-img goku-punch-damage";
            
        },
        colorBG() {
            frieza.style.backgroundColor = this.color;
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
    // console.log('Number of enemies',numEnemies)
    for (let i=0;i<=numEnemies;i++) {
        currentAlien = generateAlien();
        currentAlien.color = alienColors[i];
        currentAlien.name = `Clone ${i+1} of ${numEnemies}`
        hoarde.push(currentAlien)
    }
    return hoarde.reverse()
}

// change the current frieza's color

// Instantiate player, hoarde and alien
let player = {
    hull:20,
    firepower: 5,
    accuracy: 0.7,
    attack() {
        if (Math.random() <= this.accuracy) {
            alien.hull -= this.firepower;
            console.log('Player Attack Hit')
            turnInfo.innerHTML = "NICE ONE GOKU! PUNCHED HIM RIGHT IN THE FACE!"
        } else {
            console.log('attack missed')
            turnInfo.innerHTML = "YOU MISSED MELEE ATTACK GOKU!"
        }
        updateScreen();
        disablePlayerButtons();
        playerTurn = 0;
        enableNextTurnButton();
        goku.classList = "player-img goku-punch-player";
        gokuProjectile.classList = "player-projectile goku-punch-projectile";
        frieza.classList = "alien-img frieza-punch-damage";
    },
    shield() {
        if (Math.random() <= 0.50) {
            this.hull += 2;
            console.log('Shield up')
            turnInfo.innerHTML = "I'M HEALING!"
        } else {
            console.log("'No shield'")
            turnInfo.innerHTML = "I CAN'T HEAL RIGHT NOW"
        }
        updateScreen();
        disablePlayerButtons();
        playerTurn = 0;
        enableNextTurnButton();
        goku.classList = "player-img goku-shield";
        frieza.classList = "alien-img";
    },
    bomb() {
        if (Math.random() <= 0.50) {
            alien.hull -= 10;
            console.log('Bombs hit');
            turnInfo.innerText = "KEY BLAST WAS A DIRECT HIT!"
        } else {
            console.log('bombs missed')
            turnInfo.innerText = "I MISSED THAT ONE!!"
        }
        updateScreen();
        disablePlayerButtons();
        playerTurn = 0;
        enableNextTurnButton();
        goku.classList = "player-img goku-key-blast-player";
        gokuProjectile.classList = "player-projectile goku-key-blast-projectile";
        frieza.classList = "alien-img frieza-taking-key-blast-damage";
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
console.log(hoarde)
let alien = hoarde.pop();

// console.log('Hoarde of aliens', hoarde)

const playerDiv = document.querySelector('.player');
const alienDiv = document.querySelector('.alien');
const menuButton = document.querySelector('.actions-menu');

const goku = document.querySelector('.player-img')
const gokuProjectile = document.querySelector('.player-projectile')
const frieza = document.querySelector('.alien-img')
const friezaProjectile = document.querySelector('.alien-projectile')
alien.colorBG()
const turnInfo = document.querySelector('.turn-info')

const alienHurt = () => {
    frieza.classList = "alien-img frieza-hurt"
}

const updateAlien = () => {
    if (hoarde.length>1) {
        alien = hoarde.pop()
        alien.colorBG()
    } else {
        console.log('all aliens have been defeated')
        // turnInfo.innerHTML = "ALL THE CLONES HAVE BEEN DEFEATED!!"
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
    playerDiv.querySelector('.actions-menu').disabled = 0;
}

const enablePlayerButtons = () => {
    playerDiv.querySelectorAll('button').forEach(element => element.disabled = 0);
    playerDiv.querySelector('.retreat').disabled = 1;
}

const resetPlayers = (...playerNum) => {
    //playerNum=> 1 for player, 2 for alien
    if (playerNum.includes(1)) {
        goku.classList = "player-img"
        gokuProjectile.classList = "player-projectile"   
    }
    if (playerNum.includes(2)) {
        frieza.classList = "alien-img"
        friezaProjectile.classList = "alien-projectile"
    }
    // goku.classList = "player-img"
    // gokuProjectile.classList = "player-projectile"
    // freiza.classList = "alien-img"
    // friezaProjectile.classList = "alien-projectile"
}

const nextTurn = () => {
    if (hoarde.length==1 && alien.hull<=0) {
        gameOver = 1;
        alienHurt()
        turnInfo.innerHTML = "CONGRATS YOU'VE SAVED THE GALAXY"
        alert("CONGRATULATIONS! You've saved the world!!")
        location.reload()
    } else if (alien.hull<=0 && hoarde.length) {
        // alert('THIS ROUND IS OVER!\n You defeated this alien but the next one is coming')
        turnInfo.innerHTML = "YOU MAY HAVE DEFEATED THIS CLONE MUN-KEE BUT ANOTHER IS COMING!! <br> <span style='font-size:0.3em;word-spacing:0.1em'>freiza is a space racist FYI</span>"
        updateAlien()
        updateScreen()
        enablePlayerButtons()
        resetPlayers(1,2)
    } else {
        enablePlayerButtons()
        // alert('This alien is still here fight him again')
        // turnInfo.innerHTML = "NICE TRY SAIYAN SCUM! THIS CLONE ISN'T DEAD YET!!"
        alien.attack(1,2)

    }
    
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

