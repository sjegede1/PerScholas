// I. Variables & Datatypes
//     A. Q + A
//     How do we assign a value to a variable?
        let x; var y; const z =9;
//     How do we change the value of a variable?
        x=3; y=7; // Cannot change const
//     How do we assign an existing variable to a new variable?
        let gg = x;
//     Remind me, what are declare, assign, and define?
        console.log("Declare is let,var or const")
        console.log("Assing is equal sign")
//     What is pseudocoding and why should you do it?
        console.log('Pseudo coding is a a way of drafing a plan of attack while coding by using fake syntax.')
//     What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
        console.log("80/20 80% thinking 20% coding")
        console.log('++++++++++++++++++++++++++++++++++++++')

     // B. Strings
    // Create a variable called firstVariable
    let firstVariable;
    // Assign it the value of the string "Hello World"
    firstVariable = "Hello World";
    // Change the value of this variable to some number
    firstVariable = 5;
    // Store the value of firstVariablein a new variable called secondVariable
    let secondVariable = firstVariable;
    // Change the value of secondVariableto any string.
    secondVariable = 'Saturday Night Fever'
    // What is the value of firstVariable?
    console.log(firstVariable)
    // Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
    let yourName = 'Sola'
    console.log(`Hello my name is, ${yourName}`)
    console.log('++++++++++++++++++++++++++++++++++++++')

    // C. Booleans
    const a = 4;
    const b = 53;
    const c = 57;
    const d = 16;
    const e = 'Kevin';
  
    console.log(a != b);
    console.log(c >= d);
    console.log('Name' === 'Name');
    // FOR THE NEXT TWO, USE ONLY && OR ||
    console.log(true || false);
    console.log(false || false || false || false || false || true);
    console.log(false === false)
    console.log(e === 'Kevin');
    console.log(a < b < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
    console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
    console.log(48 == '48');
    console.log('++++++++++++++++++++++++++++++++++++++')

    // D The farm
    // Declare a variable animal. Set it to be either "cow" or something else
    // Write code that will print out "mooooo" if the it is equal to cow
    // Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
    // Commit
    let animal = 'cow'
    animal = 'cat'
    if (animal == 'cow') {
        console.log('Mooooo')
    }
    else {
        console.log("Hey! you're not a cow")
    }
    console.log('++++++++++++++++++++++++++++++++++++++')


    // E Driver's Ed
    let personAge;
    personAge = 69 //I am a child
    if (personAge>=16) {
        console.log('Here are the keys')
    } else {
        console.log("Sorry you're too young")
    }
    console.log('++++++++++++++++++++++++++++++++++++++')

// II. Loops
//     A. The Basics
console.log('++++++++++++++++++++++++++++++++++++++')
console.log("Write a loop that will print out all the numbers from 0 to 10, inclusive")
for (let i = 0;i<=10;i++) {
    console.log(i)
}

console.log('++++++++++++++++++++++++++++++++++++++')
console.log("Write a loop that will print out all the numbers from 10 to 400, inclusive")
for (let i = 10;i<=400;i++) {
    console.log(i)
}

console.log('++++++++++++++++++++++++++++++++++++++')
console.log("Write a loop that will print out every third number starting with 12 and going no higher than 4000")
for (let i = 12;i<=4000;i=i+3) {
    console.log(i)
}

console.log('++++++++++++++++++++++++++++++++++++++')

    // B. Get even
    for (let i=1;i<=100;i++) {
        if (i%2) {
            console.log(i)
        } else {
            console.log(i,' <--- is an even number')
        }
    }

    // C Give Me Five
    let crowd = 'Three is a crowd'
    let five = 'High five!'
    for (let i=1;i<=100;i++) {
        if (!(i%3) && !(i%5)) {
            console.log(`I found a ${i}. ${crowd}. ${five}`)
        } else if (!(i%3)) {
            console.log(`I found a ${i}. ${crowd}`)
        } else if (!(i%5)) {
            console.log(`I found a ${i}. ${five}`)
        }
    }

    // D Savings Account
    let bank_account =0;
    for (let i=1;i<=10;i++) {
        bank_account+=i
    }
    console.log(`Bank Account has $${bank_account} in it`)
    console.log('Now we see the promotion')
    bank_account=0;
    for (let i=1;i<=100;i++) {
        bank_account+=i*2
    }
    console.log(`The new Bank Account has $${bank_account} in it`)
    console.log('++++++++++++++++++++++++++++++++++++++')

// III. Arrays & Control Flow
    // A. Talk about it
    // What are the things in an array called?
    console.log('elements')
    // Do Arrays guarantee those things will be in order?
    console.log('yes')
    // What real-life thing could you model with an array?
    console.log('waitlist for new videogame pre-order')
    console.log('++++++++++++++++++++++++++++++++++++++')

    // B Easy Does It
    // Create an array that contains three quotes and store it in a variable called quotes
    let quotes = ["To be or not to be","Be like water","I have a dream!"]
    console.log(quotes)
    console.log('++++++++++++++++++++++++++++++++++++++')

    // C Accessing elements
    const randomThings = [1, 10, "Hello", true]
    console.log(randomThings)
    console.log('First element',randomThings[0])
    randomThings[2] = 'World'
    console.log(randomThings)
    console.log('++++++++++++++++++++++++++++++++++++++')

    // D Change values
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
    console.log(ourClass)
    ourClass[4] = 'Octocat'
    ourClass.push("Cloud City")
    console.log(ourClass)
    console.log('++++++++++++++++++++++++++++++++++++++')

    // E Mix It Up 
    const myArray = [5, 10, 500, 20]
    console.log(myArray)
    myArray.push('Aegon')
    myArray.shift()
    myArray.unshift('Bob Marley')
    myArray.reverse()
    console.log(myArray)
    console.log('++++++++++++++++++++++++++++++++++++++')

    // F Biggie Smalls
    let number = 6
    if (number < 100) {
        console.log('little number')
    } else {
        console.log('big number')
    }
    console.log('++++++++++++++++++++++++++++++++++++++')

    // G Monkey in the Middle
    if (number < 5) {
        console.log('little number')
    } else if (number > 10) {
        console.log('big number')
    } else {
        console.log('monkey')
    }
    console.log('++++++++++++++++++++++++++++++++++++++')

    // H what's in your closet?
    const kristynsCloset = [
        "left shoe",
        "cowboy boots",
        "right sock",
        "Per Scholas hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
      ];
      
      // Thom's closet is more complicated. Check out this nested data structure!!
      const thomsCloset = [
        [
          // These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],[
          // These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],[
          // Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
      ];

      console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
      kristynsCloset.splice(5,0,'raybans')
      kristynsCloset[6] = "stained knit hat";
      console.log(kristynsCloset)


      console.log("Thom is looking fierce in a ",thomsCloset[0][2],thomsCloset[1][1],thomsCloset[2][0])

      console.log('++++++++++++++++++++++++++++++++++++++')


// IV Functions
    //   A printGreeting 
    const printGreeting = (name) => {
    return  'Hello there, ' + name
}

    console.log(printGreeting("Slimer"));
    console.log('++++++++++++++++++++++++++++++++++++++')

    // B printCool 
    const printCool = (name) => {
        return  name + ' is cool'
    }
    console.log(printCool("Captain Reynolds"));
    console.log('++++++++++++++++++++++++++++++++++++++')

    
    // C. calculateCube
    const calculateCube = (number) => {
        return number**3
    }
    console.log(calculateCube(5));
    console.log('++++++++++++++++++++++++++++++++++++++')



    // D isVowel

    const isVowel = (char) => {
        if ('aeiou'.split('').includes(char)) {
            return true
        } else {
            return false
        }
    }
    console.log(isVowel("a"));
    console.log('++++++++++++++++++++++++++++++++++++++')

    // E. getTwoLengths
    const getTwoLengths = (first,second) => {
        return [first.length,second.length]
    }
    console.log(getTwoLengths("Hank", "Hippopopalous"));
    console.log('++++++++++++++++++++++++++++++++++++++')

    // F. getMultipleLengths 
    const getMultipleLengths = (args) => {
        let output = []
        args.forEach((elem) => {output.push(elem.length)})
        return output
    }
    console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
    console.log('++++++++++++++++++++++++++++++++++++++')


    // G. maxOfThree
    const maxOfThree = (...args) => {
        if (args[0] >= args[1] && args[0] >= args[1]) {
            return args[0]
        } else if (args[1] >= args[2]) {
            return args[1]
        } else {
            return args[2]
        }
    }
    console.log(maxOfThree(6, 9, 1));
    console.log('++++++++++++++++++++++++++++++++++++++')

    // H. printLongestWord
    const printLongestWord = (args) => {
        let currentMax = args[0]
        args.forEach((el,i) => {
            (currentMax.length<=el.length) ? (currentMax=el) : {}
        }
        )
        return currentMax
    }
    console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
    console.log('++++++++++++++++++++++++++++++++++++++')

// V Object 
    // A Make a user object 
    let user = {
        name: 'Sola',
        email: 'email@email.com',
        age: 30,
        purchased: [],
    }
    console.log(user)
    // B. Update the user
    user.email = 'new-email@email.com'
    user.age++
    console.log(user)
    console.log('++++++++++++++++++++++++++++++++++++++')
    // C. Adding keys and values
    user.location = 'Las giddy'
    console.log(user)
    console.log('++++++++++++++++++++++++++++++++++++++')
    // D. Shopaholic!
    user.purchased.push('carbohydrates','peace of mind','Merino jodhpurs')
    console.log(user.purchased.at(-1))
    console.log(user)
    console.log('++++++++++++++++++++++++++++++++++++++')

    // E. Object-within-object
    friend = {
        name: "Grace Hopper",
        age: 85,
        loaction: 'Atlanta',
        purchased: [],
    }

    user.friend = friend
    console.log(user)
    friend.purchased.push('A latte')
    console.log('++++++++++++++++++++++++++++++++++++++')


    // F Loops
    for (i of user.purchased) {
        console.log(i)
    }
    for (i of friend.purchased) {
        console.log(i)
    }

    // G Functions can operate on objects
    const updateUser = () => {
        user.age++
        user.name = user.name.toUpperCase()
    }

    updateUser()
    console.log(user)

    const oldAndLoud = (person) => {
        person.age++
        person.name = person.name.toUpperCase()
    }

    oldAndLoud(user)
    console.log(user)