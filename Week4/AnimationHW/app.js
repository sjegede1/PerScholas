// TOGGLE CLASS TO HIGHLIGHT SELCTION
const selectRacer = (player) => {
    document.querySelector(`.${player}`).classList.toggle('racer-selected')
}




// ANIMATION CODE

let options = {
    // sync options
    duration: 10*1000,
    iterations: 1,
  }

const raceKeyFrames = (radius) => {
    let frames = [];
    let x=0;let y=0
    // First straight
    for (y;y<150;y+=20){
        frames.push({transform:`translateX(${x}px) translateY(${y}px)`})
    }

    // First Turn
    let delta =  Math.PI/20;
    // let radius = 225;
    let tempx; let tempy;
    for (let i=Math.PI; i>0;i-=delta) {
        tempx = radius+radius*Math.cos(i);
        tempy = y+radius*Math.sin(i);
        frames.push({transform:`translateX(${tempx}px) translateY(${tempy}px)`})
        
    }
    x = tempx;
    y = tempy;

    // Second Straight

    for (y;y>0;y-=5){
        frames.push({transform:`translateX(${x}px) translateY(${y}px)`});
    }
    // Final Turn
    for (let i=0; i>-1*Math.PI;i-=delta) {
        tempx = radius+radius*Math.cos(i);
        tempy = radius*Math.sin(i);
        frames.push({transform:`translateX(${tempx}px) translateY(${tempy}px)`})
        
    }

    return frames
}
const radii = [264,220,170,120]
const raceTimes = [7000 + 3000*Math.random(),7000 + 3000*Math.random(),7000 + 3000*Math.random(),7000 + 3000*Math.random()]
const allRacers = document.querySelectorAll('.racer')
const startRace = () => {
    
    allRacers.forEach(
        (element,index) => {
            let currentElement = element;
            options.duration = raceTimes[index];
            currentElement.animate(raceKeyFrames(radii[index]),options)
        }
    )
}

// TODO: MAke Podoium Toggle
// TODO: Vary racer speeds to create suspense 
// 