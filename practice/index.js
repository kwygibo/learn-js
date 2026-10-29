// Create two variables, firstName and lastName
let firstName = "Bob's"
let lastName = "Your Uncle"
// Concatenate the two variables into a third variable called fullName
let fullName = `${firstName} ${lastName}`
let person = "Linda"
let greeting = "Hi there"

// calculator
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


// Log fullName to the console

console.log(fullName)

// P2 -  Create a function that logs out "Hi there, Linda!" when called

function hiPerson(params) {
    txtGreeting = `${greeting}, ${person}!`
    return txtGreeting

}

console.log(hiPerson())

//P3
let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
function add3Points() {
    myPoints += 3;

}

function remove1Point() {
    myPoints -= 1;
}
// add/remove points to/from the myPoints variable

while (myPoints !== 10) {
    if (myPoints < 10) {
        add3Points();
    }
    else {
        remove1Point();
    }
}
// Call the functions to that the line below logs out 10
console.log(myPoints)

/*  -----------------------------------------*/

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22 
console.log(11 + 7) //18
console.log(6 + "5") //555555 wrong: 65
console.log("My points: " + 5 + 9) //My points: 14, wrong, My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114


/*  ------------ Calculator ------------------------*/
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
function add() {
    let ttl = num1 + num2
    document.getElementById("sum-el").textContent = `Sum: ${ttl}`
    // return ttl

}

function subtract() {
    let ttl = num1 - num2
    document.getElementById("sum-el").textContent = `Sum: ${ttl}`
    //    return ttl

}
function multiply() {
    let ttl = num1 * num2
    document.getElementById("sum-el").textContent = `Sum: ${ttl}`
    //return ttl

}
function divide() {
    let ttl = num1 / num2
    document.getElementById("sum-el").textContent = `Sum: ${ttl}`
    //return ttl

}

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"