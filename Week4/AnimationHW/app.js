// TOGGLE CLASS TO HIGHLIGHT SELCTION
const selectRacer = (player) => {
  document.querySelector(`.${player}`).classList.toggle("racer-selected");
};

// ANIMATION CODE

let options = {
  // sync options
  duration: 10 * 1000,
  iterations: 1,
};

const raceKeyFrames = (radius) => {
  let frames = [];
  let x = 0;
  let y = 0;
  // First straight
  for (y; y < 150; y += 20) {
    frames.push({ transform: `translateX(${x}px) translateY(${y}px)` });
  }

  // First Turn
  let delta = Math.PI / 20;
  // let radius = 225;
  let tempx;
  let tempy;
  for (let i = Math.PI; i > 0; i -= delta) {
    tempx = radius + radius * Math.cos(i);
    tempy = y + radius * Math.sin(i);
    frames.push({ transform: `translateX(${tempx}px) translateY(${tempy}px)` });
  }
  x = tempx;
  y = tempy;

  // Second Straight

  for (y; y > 0; y -= 5) {
    frames.push({ transform: `translateX(${x}px) translateY(${y}px)` });
  }
  // Final Turn
  for (let i = 0; i > -1 * Math.PI; i -= delta) {
    tempx = radius + radius * Math.cos(i);
    tempy = radius * Math.sin(i);
    frames.push({ transform: `translateX(${tempx}px) translateY(${tempy}px)` });
  }

  return frames;
};
const racerNames = ["peterperfect", "penelope", "dastardly", "cavemen"];
const radii = [264, 220, 170, 120];
const raceTimeFunc = function () {
  return 7000 + 3000 * Math.random();
};
const raceTimes = [];

const allRacers = document.querySelectorAll(".racer");
const awardWinnersButton = document.querySelector('.award-winners');

const startRace = () => {
    raceTimes.splice(0,raceTimes.length)
  raceTimes.push(
    raceTimeFunc(),
    raceTimeFunc(),
    raceTimeFunc(),
    raceTimeFunc()
  );
  allRacers.forEach((element, index) => {
    let currentElement = element;
    options.duration = raceTimes[index];
    currentElement.animate(raceKeyFrames(radii[index]), options);
  });
//   Make award-winners button clickable
    awardWinnersButton.disabled = false;
};

// Create podium grid in HTML using grid and borders
// The functions below will be triggered when we award the winners
const createEntries = (times) => {
  let entries = {};
  racerNames.forEach((element, index) => {
    entries[element] = times[index];
  });
  return entries;
};


const sortWinners = (obj) => {
    return Object.entries(obj).sort((a,b) => b[1]-a[1]).map(el=>el[0]).reverse()
}

let firstRacer = document.querySelector('#first-racer')
let secondRacer = document.querySelector('#second-racer')
let thirdRacer = document.querySelector('#third-racer')

awardWinnersButton.onclick = () => {
    let entries = createEntries(raceTimes);
    let sortedWinnersArray = sortWinners(entries)
    console.log(document.querySelector('.'+sortedWinnersArray[0]))

    firstRacer.innerHTML = document.querySelector('.'+sortedWinnersArray[0]).innerHTML
    secondRacer.innerHTML = document.querySelector('.'+sortedWinnersArray[1]).innerHTML
    thirdRacer.innerHTML = document.querySelector('.'+sortedWinnersArray[2]).innerHTML
    
    document.querySelector('.podiumGrid').classList.toggle('winner-podium')
}

// Style Buttons and Add footer
// Buttons have been styles. Need to populate footer content if I have the time in the morning