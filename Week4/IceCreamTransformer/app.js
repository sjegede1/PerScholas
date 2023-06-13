let iceCreamInfo = {
    vanilla: {
        src: 'https://www.clipartmax.com/png/middle/102-1028050_french-vanilla-ice-cream-cone.png',
        haiku: `Velvet sweetness swirls,<br /> Cool embrace on eager tongues, <br /> Vanilla delight.`,
        description: 'Vanilla ice cream, with its pure and timeless flavor, holds a special place in the hearts of dessert lovers worldwide. Its smooth and creamy texture creates a delightful sensation as it glides across the palate. The subtle sweetness of vanilla beans, carefully infused into the rich custard base, dances harmoniously with every lick or spoonful. Whether enjoyed in a simple cone, paired with a warm slice of pie, or adorned with a medley of toppings, vanilla ice cream remains a classic treat that never fails to bring a smile and a moment of pure indulgence.',
        color:'#faebd7',
    },
    strawberry: {
        src: 'https://www.citypng.com/public/uploads/preview/hd-strawberry-ice-cream-cone-png-116533487151jsipdgjdu.png',
        haiku: 'Blushing sweetness gleams,<br>Juicy kisses on the tongue,<br>Strawberry delight.',
        description: 'Strawberry ice cream, with its vibrant hue and delightful flavor, embodies the essence of summer in every scoop. The luscious combination of ripe strawberries and creamy indulgence creates a symphony of taste that leaves taste buds yearning for more. Each bite is a burst of fruity sweetness, balanced perfectly with the smoothness of the ice cream base. Whether enjoyed on its own, in a waffle cone, or as a refreshing accompaniment to a slice of cake, strawberry ice cream brings a refreshing and nostalgic joy to dessert lovers of all ages. Its refreshing and fruity profile makes it a perennial favorite, transporting us to sunny days and carefree moments with each delightful spoonful.',
        color:'#d87093',
    },
    chocolate: {
        src: "https://www.clipartmax.com/png/middle/122-1224520_chocolate-ice-cream-stock-photo-ice-cream.png",
        haiku: 'Silken cocoa dream, <br> Melting on eager taste buds,<br> Chocolaty bliss.',
        description: 'Chocolate ice cream, with its luscious and velvety allure, is a decadent delight that captivates chocolate enthusiasts around the globe. Its rich and indulgent flavor, derived from the finest cocoa beans, enchants the senses with each spoonful. The smooth and creamy texture tantalizes the palate, leaving a lingering sensation of pure cocoa bliss. Whether enjoyed in a classic cone, as a sundae adorned with a cascade of toppings, or as a base for delectable desserts, chocolate ice cream remains an irresistible treat that brings joy to all who savor its deliciousness.',
        color: '#d2691e',
    }
}

// Make each button clickable
// - Change background color to match button background color;
// - Change main section content to match button content

const flavorButtons = document.querySelectorAll('button')
const mainImg = document.querySelector('.mainImg')
const haiku = document.querySelector('.haiku')
const description = document.querySelector('.description')
const main = document.querySelector('main')

const flavorButtonPress = (flavorName) => {
    // flavorName = flavor.className;
    console.log(flavorName)
    mainImg.src = iceCreamInfo[flavorName].src;
    haiku.innerHTML = iceCreamInfo[flavorName].haiku;
    description.innerText = iceCreamInfo[flavorName].description;
    main.style.backgroundColor = iceCreamInfo[flavorName].color;
}

flavorButtons.forEach(
    (element) => {
        let flavorName = element.innerHTML.toLowerCase();
        element.onclick = () => {flavorButtonPress(flavorName)}
    }
)