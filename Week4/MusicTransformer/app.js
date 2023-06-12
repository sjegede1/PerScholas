let musicInfo = {
    
    country: {
        name: "Country",
        src: "https://img.freepik.com/free-vector/hand-drawn-flat-country-music-illustration_23-2149433222.jpg?w=2000",
        introText: "Grab your guitars and banjos ladies and gentlemen!!!",
        description: "Country is a music genre originating in the Southern and Southwestern United States. First produced in the 1920s, country primarily focuses on working class Americans and blue-collar American life",
    },
    hiphop: {
        name: "Hip-Hop",
        src: "https://static.vecteezy.com/system/resources/previews/000/364/864/original/graffiti-hiphop-wall-urban-background-vector.jpg",
        introText: "Hip-hop is what makes the world go around. Snoop Dogg",
        description: "Hip hop music or hip-hop music, also known as rap music and formerly known as disco rap, is a genre of popular music that originated in the Bronx borough of New York City in the early 1970s by African Americans, and it had been around for years prior before mainstream discovery.",
    },
    rock: {
        name: "Rock",
        src: "https://media.istockphoto.com/id/1183921035/vector/rock-sign-gesture-with-lightning-for-your-design.jpg?s=612x612&w=0&k=20&c=4r6LcLz2IQ_NBQ__YsSoy9rANKTvxwm-Bnw6lfoYNfM=",
        introText: "Rock n' roll is poison put to sound.-Pablo Casals.",
        description:"Rock music is a broad genre of popular music that originated as Rock and Roll in the United States in the late 1940s and early 1950s, developing into a range of different styles from the mid-1960s, particularly in the United States and United Kingdom. ",
    }

}

const genreButtons = document.querySelectorAll('button')
const musicTitle = document.querySelector('.musicTitle')
const genreIntro = document.querySelector('.genreIntro')
const description = document.querySelector('.description')
const genreImg = document.querySelector('.genreImg')

const genreButtonPress = (buttonElem) => {
    musicTitle.innerText = musicInfo[buttonElem.className].name
    genreIntro.innerText = musicInfo[buttonElem.className].introText
    description.innerText = musicInfo[buttonElem.className].description
    genreImg.src = musicInfo[buttonElem.className].src
}


genreButtons.forEach (
    (element) => {
        let buttonElem = element
        element.onclick = () => {genreButtonPress(buttonElem)}
    }
)

