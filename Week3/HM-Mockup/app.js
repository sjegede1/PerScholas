// DOM MANIPULATION


// Goal -> retail site
    // dynamically change the entire site with the click of a button

let majorContainer = {
    mens: {
        headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
        productImages: [
            {
                name: 'Sneakers',
                pic: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            },
            {
                name: 'Boots',
                pic: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            },
            {
                name: 'Flannels',
                pic: 'https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Scarves',
                pic: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hoodies',
                pic: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hats',
                pic: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80',
            },
        ],
        textDescription: `Browse our entire selection of men's clothing at H&M. From basics and loungewear to sweaters and suiting, we have something for every season and occasion. Whether you prefer bright colors and loud patterns or neutral, solid colors, find the clothes that match your style.`,
        lowImage: ''
    },
    womens: {},
    kids: {}
}
// ----------------------------------------

let mainImageDiv = document.querySelector('.mainImage')
console.log(mainImageDiv)
const topPic = document.querySelector('.topPic')
console.log(topPic)
let option = document.querySelector('.options')
let miniOp = document.querySelectorAll('.choice')
let productBox = document.querySelector('.productContainer')
let pic = document.querySelector('.polaroid')
let textBox = document.querySelector('.textContainer')


// category buttons
const allButtons = document.querySelectorAll('.tabs')
const mensButton = document.querySelector('.mens')
const womensButton = document.querySelector('.womens')
const kidsButton = document.querySelector('.kids')

console.log(allButtons)

// if its text we can replace it. if its an image we need to create a new image

// const changeTopPic = () => {
//     console.log('clicked mens')
//     // create image
//     let newImage = document.createElement('img')
//         newImage.setAttribute('src', majorContainer.mens.headImage)
//         newImage.setAttribute('class','topPic')
//     // replace with current image
//     mainImage.replaceWith(newImage)

// }
// const changeOptions = () => {
//     let tabz = document.querySelector('div.choice')
//     tabz.remove()
//     // doesnt work
//     // // miniOp.replaceWith("") 
//     // option.remove()
//     let newOption = document.createElement('div')
//     newOption.setAttribute('class','options')

//     // // let text = document.querySelector('.options2')

//     majorContainer.mens.optionTags.forEach((tagName) => {
//         // create elements
//         let text = document.createElement('div')
//         text.innerHTML = tagName

//         // replace element with new element
//         newOption.append(text)
//     })
// }
// const product = () => {
//     majorContainer.mens.productImages.forEach((obj) => {
//         let shopBox = document.createElement('div')
//         shopBox.setAttribute('scr', obj.pic)
//         productBox.append(shopBox)
//     })

// }

// booleans to check category clicked
let isMens
let isWomens
let isKids
let clickedCategory


// check clicked category
allButtons.forEach((button) => {
    button.addEventListener(('click'), () => {
        // console.log(button.classList.value.includes('boys'))
        if(button.classList.value.includes('boys')){
            isMens = true
            isWomens = false
            isKids = false
        } else if(button.classList.value.includes('girls')){
            isWomens = true
            isMens = false
            isKids = false
        } else if(button.classList.value.includes('kids')){
            isKids = true
            isMens = false
            isWomens = false
        }
        console.log(`MENS CLICKED: ${isMens}`)
        console.log(`WOMENS CLICKED: ${isWomens}`)
        console.log(`KIDS CLICKED: ${isKids}`)
    })
})


// change top pic
const changeTopPic = () => {
    // check category
    if(category === "mens"){
        
    } else if(category === "womens"){

    } else if(category === "kids"){

    }
}

//