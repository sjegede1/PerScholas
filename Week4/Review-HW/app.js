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