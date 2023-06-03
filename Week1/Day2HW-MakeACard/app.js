const cardbutton = document.querySelector('button')
const cardFront = document.querySelector(".cardFront")
const cardInside = document.querySelector(".cardInside")

cardbutton.onclick = () => {
    cardFront.style.contentVisibility = 'hidden'
    cardInside.style.contentVisibility = 'visible'
}