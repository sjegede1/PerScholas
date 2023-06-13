const makeBoxMove = (boxNum) => {
    let boxClassName = `.still-box${boxNum}`;
    document.querySelector(boxClassName).classList.toggle('moving-box')
}