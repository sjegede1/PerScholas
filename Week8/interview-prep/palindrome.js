// Solve problem
function backwardsWord(word) {
    let result = "";
    for (let index=word.length-1;index>0;index--) {
        result += word[index]
    }
    return result
}

function isPalindrome(word) {
    return word.toLowerCase() === backwardsWord(word).toLowerCase()
}

// DOM Manipulation
const displayPalindromeResult = (word) => {
    document.getElementById("forwards").innerHTML = `Forward: ${word.toLowerCase()}`;
    document.getElementById("backwards").innerHTML = `Backward: ${backwardsWord(word).toLowerCase()}`;
    let result = document.querySelector("#result")
    result.innerHTML = isPalindrome(word) ? `This is a palindrome` : `This is not a palindrome`
}

const submitPalindromeForm = (event) => {
    event.preventDefault();
    let word = event.target.firstElementChild.value;
    console.log(word)
}

document.querySelector("form").addEventListener("submit",submitPalindromeForm)