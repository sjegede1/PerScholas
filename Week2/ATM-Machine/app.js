const card1 = {
    pincode: 1234,
    currentBalance: 1000,
    user: 'Sola',
    cardInfo: [0123,4567,8910,1112],
    bankName: "Wells Fargo",
    src: "https://www.google.com/search?q=wells+fargo+debit+card+design&tbm=isch&ved=2ahUKEwiPpfvmj63_AhX7L94AHbycBKwQ2-cCegQIABAA&oq=wells+fargo+debit+card+design&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQAeMgYIABAFEB4yBggAEAUQHjIGCAAQAeMgYIABAFEB4yBggAEAUQHlDVB1jVB2DFCWgAcAB4AIABVogBmgGSAQEymAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=RFp-ZI_zGvvf-LYPvLmS4Ao&bih=942&biw=941&rlz=1C1CHBF_enUS926US926&hl=en#imgrc=nYAYlP_OAXd6rM",    
}

const card2 = {
    pincode: 1234,
    currentBalance: 1500,
    user: 'Sola',
    cardInfo: [0123,4567,8910,1112],
    bankName: "Navy Federal",
    src: "https://i.pinimg.com/236x/b5/50/0d/b5500df9cf601835f9387b5572d822b4--federal-road-trips.jpg",
}

const card3 = {
    pincode: 1234,
    currentBalance: 22000,
    user: 'Sola',
    cardInfo: [0123,4567,8910,1112],
    bankName: "Bank of America",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqiM0oqg2tMh_aeMpDr4HtzNwMniK9qJxdXDeeoWaI2k5O1A2vuZBiZiCOBgV_c2cCO3U&usqp=CAU",
}


// key is bill value: value is quantity
const notes = {
    1:20, 
    5: 10, 
    10:3, 
    20:1, 
    50:1, 
    100:2,
}

const cheque1 = {
    description: 'June Paycheck',
    payor: 'Person 1',
    amount: 3200,
}

const cheque2 = {
    description: 'Birthday Check',
    payor: 'Person 2',
    amount: 20,
}

const cheque3 = {
    description: 'Sugar Parent donation',
    payor: 'Person 3',
    amount: 1000,
}

wallet = {
    cards: [card1,card2,card3],
    cash: notes,
    cheques: [cheque1,cheque2,cheque3]
}

const numPad = document.querySelector('.numPad');
const screenDisplay = document.querySelector('.screenDisplay')
let screenDisplayInput = document.querySelector('.screenDisplayInput')
const cancelButton = document.querySelector('#cancelButton')
const clearButton = document.querySelector('#clearButton')
const enterButton = document.querySelector('#enterButton')

const pressNumKey= (numKeyInnerHTML) => {
    screenDisplayInput.innerText += numKeyInnerHTML;
}

//TODO: Change the functionality of Cancel and Enter
const pressCancelButton = () => {
    screenDisplayInput.innerText = "";
}

const pressClearButton = () => {
    screenDisplayInput.innerText = "";
}

const pressEnterButton = () => {
    screenDisplayInput.innerText = "";
}


// This loop helps the numeric keys to be pressable
for (numKey of numPad.querySelectorAll('.numKey')) {
    let sentKey = numKey.innerHTML;
    numKey.onclick = function() {
        pressNumKey(sentKey)
    }
}

// Make cancelButton, Clear and enter buttons clickable
cancelButton.onclick = () => {pressCancelButton()}
clearButton.onclick = () => {pressCancelButton()}
enterButton.onclick = () => {pressCancelButton()}

// Create ATM Object and ATM Object will be the current page that the ATM is on
ATM = {};

// TODO: Complete code and functions for each page
// welcomePage = {
//     screenDisplay: '<h1> Welcome to the ATM </h1><> <p>Please insert card below</p>',
//     screenButtonArray: [],
// }

// homePage = {
//     screenDisplay: '<h1> Welcome to the ATM </h1><> <p>Please select an option below</p>',
//     screenButtonArray: [withdraw,deposit,changePincode,balanceInquiry,quickWithdraw],
// }

// withDrawPage = {
//     screenDisplay: '',
//     screenButtonArray: [20,40,60,80,100,'Other'],
// }

// withDrawPageOther = {
//     screenDisplay: '<h1> Enter Amount you want to withdraw </h1><> <p>Only multiples of 20</p>',
//     screenButtonArray: [back],
// }

// depositPage = {
//     screenDisplay: '<h1> Enter Amount you want to withdraw </h1><> <p>Only multiples of 20</p>',
//     screenButtonArray: [cash,cheque,back],
// }

// cashPage = {
//     screenDisplay: '<h1> Insert cash below </h1><>',
//     screenButtonArray: [back],
// }

// chequePage = {
//     screenDisplay: '<h1> Insert cheques below </h1><>',
//     screenButtonArray: [back],
// }

// changePinPage = {
//     screenDisplay: '<h1> Enter current pin </h1><>',
//     screenButtonArray: [back],
// }

// balanceInquiryPage = {
//     screenDisplay: '<h1> Insert cash below </h1><>',
//     screenButtonArray: [back]
// }

