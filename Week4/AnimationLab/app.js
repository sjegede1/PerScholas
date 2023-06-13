const makeBoxMove = (boxNum) => {
    let boxClassName = `.still-box${boxNum}`;
    if (boxNum==1) {
        document.querySelector(boxClassName).classList.toggle('moving-box')
    } else if (boxNum==2) {
    document.querySelector(boxClassName).classList.toggle('spinning-box')
    }
}