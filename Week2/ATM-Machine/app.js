const card1 = {
    pincode: 1234,
    currentBalance: 1000,
    user: 'Sola',
    cardInfo: [0123,4567,8910,1112],
    bankName: "Wells Fargo"
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
    payor: 'June Paycheck',
    amount: 3200,

}

wallet = {
    cards: [card1],
    cash: notes,
    cheques: [cheque1]
}