// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log("Max of two: (3,9): ", maxOfTwoNumbers(3, 9));

// 2.
const maxOfThree = (a, b, c) => {
  if (a >= b && a > c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};

console.log('Problem 2:')
console.log("Max of Three (3,6,9): ", maxOfTwoNumbers(3, 6, 9));
console.log("Max of Three (9,-6,9): ", maxOfTwoNumbers(9, -6, 9));

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. 
// For example, sumArray([2, 4, 5]);would return 11.
const sumArray = (numArr) => {
    let totalSum = 0;
    numArr.forEach((element) => {
        totalSum += element;
    }
    )
    return totalSum
}

console.log('Problem 4: ',sumArray([2, 4, 5]))

//6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when calle
const numArgsArrow = (...args) => {
  return args.length
}

const numArgsExpression = function() {
  return arguments.length
}

let myArr = [1,2,3]


console.log('Function Expression', numArgsExpression(...myArr))
console.log('Arrow Function',numArgsArrow(1,2,3))



// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. 
// For example, reverseString('rockstar');would return the string "ratskcor".

const reverseString = (strInput) => {
    return strInput.split('').reverse().join('')
}
let regStr = 'rockstar'
console.log(`Problem 7: Reverse String "${regStr}":`,reverseString(regStr))

// 8.
const longestStringInArray = (strArr) => {
    longestLength = strArr[0].length;
    longestIndex = 0;

    strArr.forEach((element, index) => {
        if (element.length >= longestLength) {
            longestLength = element.length;
            longestIndex = index;
        }
    }
    )
    return strArr[longestIndex]
}
let strArr = ['say', 'hello', 'in', 'thhhhhhhe', 'morning'];
console.log(`Problem 8: The longest string in ${strArr} is `, longestStringInArray(strArr))

// 9.
const stringsLongerThan = (strArr,len) => {
    let finalArr = [];
    strArr.forEach((element) => {
       (element.length>len)?finalArr.push(element):{}
    })
    return finalArr
}
strArr = ['say', 'hello', 'in', 'the', 'morning'];
console.log('Problem 9: ',stringsLongerThan(strArr, 3))

