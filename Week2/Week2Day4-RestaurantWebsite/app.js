// description object format "name": Array['nutritional fax']
let sandwichVarNames = ['blackForestHam','chickenBaconRanchMelt','classicTuna','coldCutCombo','italianBMT','meatballMarinara']

let description = {
    blackForestHam: "The Black Forest Ham is a beautiful sandwich with a Smokey flavor that your taste buds will love. ",
    chickenBaconRanchMelt: "The Chicken & Bacon Ranch Melt is a tasty treat that will satisfy the ranch lover in you. ",
    classicTuna: "The Classic Tuna is a tuna lover’s dreams with a well-made creamy tuna that is placed on the bread of your choice. ",
    coldCutCombo:"The Cold Cut Combo is probably the oldest sandwich on their menu. This sandwich is stacked high with ham, salami, and bologna that is turkey-based.",
    italianBMT:"The Italian B.M.T. is filled with Genoa Salami, Spicy Pepperoni, and Black Forest ham to give you a tasty sub you will come back for.",
    meatballMarinara:"With an undeniably delicious marinara sauce drenching your meatballs. "

}

// Nutritional facts sandiwchname: Array[calories g,total fat g,sturated fat g,cholesterol mg] all in grams
let nutritionalFacts = {
    blackForestHam: [260,4,1,30,740,42,19],
    chickenBaconRanchMelt: [540,26,10,100,1100,41,36],
    classicTuna:[450,25,4.5,40,610,38,19],
    coldCutCombo:[330,12,3.5,45,1060,40,16],
    italianBMT:[380,17,6,50,1100,40,19],
    meatballMarinara:[430,18,7,40,1040,48,20]
}

let imgSrc = {
    blackForestHam: "https://subway-menu.net/img/blackforestham.jpg",
    chickenBaconRanchMelt: "https://subway-menu.net/img/chickenbaconranch.jpg",
    classicTuna:"https://subway-menu.net/img/tuna-sub.jpg",
    coldCutCombo:"https://subway-menu.net/img/cold-cut-combo.jpg",
    italianBMT:"https://subway-menu.net/img/italian-bmt.jpg",
    meatballMarinara:"https://subway-menu.net/img/meatball-marinara.jpg"
}

let sandwichName = {
    blackForestHam: "Black Forest Ham",
    chickenBaconRanchMelt: "Chicken & Bacon Ranch Melt",
    classicTuna:"Classic Tuna",
    coldCutCombo:"Cold Cut Combo",
    italianBMT:"Italian B.M.T.",
    meatballMarinara:"Meatball Marinara"
}

const cartItems = document.getElementsByClassName("cartItems")[0]

const addToCart = (inches,sandwich) => {
    let newCartItem = document.createElement('div')
    newCartItem.className = "cartItem";
    
    let price;
    if (inches==6) {
        price = 5.00
    } else {
        price = 8.00
    }
    
    newCartItem.innerHTML = `<span><img src=${imgSrc[sandwich]} alt=""></span><span>${inches}" ${sandwichName[sandwich]}</span> <span class="priceSpan"><strong>${price}</strong></span>`
    cartItems.appendChild(newCartItem)
}


const menuItems = document.getElementsByClassName('menuItems')
const sixInBtnArray = document.querySelectorAll('button.six-in-btn')
const footLongBtnArray = document.querySelectorAll('button.foot-long-btn')
const totalPriceSum = document.getElementById('totalPriceSum')

const calculateTotalPrice = () => {
    let sum = 0;
    for (let item of cartItems.getElementsByClassName('priceSpan')) {
        sum+=Number(item.innerText)
        // console.log(item.innerText,sum)
    }
    totalPriceSum.innerText = sum
}

for (let i=0;i<menuItems.length;i++) {
    let menuItemName = menuItems[i].getElementsByClassName('menuItemName')[0]
    let menuItemImg = menuItems[i].getElementsByClassName('menuItemImg')[0]
    let menuItemDescription = menuItems[i].getElementsByClassName('menuItemDescription')[0]

    menuItemName.innerHTML = sandwichName[sandwichVarNames[i]]
    menuItemImg.src = imgSrc[sandwichVarNames[i]]
    menuItemDescription.innerHTML = description[sandwichVarNames[i]]

    sixInBtnArray[i].onclick = () => {addToCart(6,sandwichVarNames[i]);calculateTotalPrice()}
    footLongBtnArray[i].onclick = () => {addToCart(12,sandwichVarNames[i]);calculateTotalPrice()}
}


