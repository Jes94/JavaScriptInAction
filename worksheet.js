// 1. Days of the Week

let dayOfWeek = `Monday`;
console.log(dayOfWeek);
dayOfWeek = `Friday`
console.log(`I can't wait for ${dayOfWeek}`)

// 2. User Input

let animalInput = prompt('What is your favorite animal?');
let colorInput = prompt('What is your favorite color?');
alert(`I've never seen a ${colorInput} ${animalInput}!`);

// Conditional # 1. Meals

// Bacon egg and cheese bagel
// Ham and cheese sub 
// Pizza

let timeOfDay = 1700;
let mealChoice = '';
if (timeOfDay < 1200) {
    mealChoice = 'Bacon egg and cheese bagel';
    }
else if(timeOfDay >= 1200 && timeOfDay < 1700) {
    mealChoice = 'Ham and cheese sub';   
    } 
else if(timeOfDay >= 1700); {
    mealChoice = 'Pizza';    
    }
console.log(mealChoice);

// Conditional # 2. Random Number

let randomNumber = Math.floor(Math.random() * 11);
if (randomNumber <= 2) {
    console.log('Beatles');
} 
else if (randomNumber >= 3 && randomNumber <= 5) {
    console.log('Stones');
}
else if (randomNumber >= 6 && randomNumber <= 8) {
    console.log('Floyd');
}
else if (randomNumber >= 9 && randomNumber <= 10) {
    console.log('Hendrix');
}

// For Loop

for(let i = 0; i<7; i++){
    console.log('JavaScript is so cool compared to HTML!');
}

let forLoopCounter = 0;
for(let i = 0; i<11; i++){
    console.log(forLoopCounter);
    forLoopCounter++;
}

for(let i=0; i<10; i++);{
    if (i % 2 === 0) {
        console.log('Hello');
    } 
    else {
        console.log('Goodbye');
    }
}

// While Loops

while(isInstructorAwesome){
    //logic goes here must include a way to set isInstructorAwesome to false.
}

// Favorite Movie (void function)

function printMovieName(){
    let favoriteMovie = 'Shooter';
    console.log(favoriteMovie);
}
printMovieName();

// Favorite Band (return function)

function userInputBand() {
    let userInput = prompt('Please enter your favorite band.');
    return userInput;
}

let userBand = userInputBand();
console.log(userBand);

// Concert (parameters)

function concertDisplay(musicalArt) {
    myStreet = prompt('Please enter the name of the street you live on.');
    console.log(`It would be great if ${musicalArt} played a show on ${myStreet}!`);
}

concertDisplay('Random Band Name');

// Desktop items (arrays)

let desktopItems = ['desk', 'lamp', 'computer'];
console.log(desktopItems[1]);

desktopItems.push('Infinity Gauntlet')
for (let index = 0; index < desktopItems.length; index++) {
    console.log(desktopItems[index])
    
}

// Boss Fight: Magic Number

let magicNumber = Math.floor(Math.random() * 101);
let guess = 0
while (guess!=magicNumber) {
    guess = parseInt(prompt('Guess a number 0-100!'))
    if (guess===magicNumber){
        console.log(`Winner winner chicken dinner! The magic number was ${magicNumber}.`)
        break
    }
    else if (guess > magicNumber-10 && guess < magicNumber+10) {
        console.log('Getting warmer!')
    } 
    else if (guess > magicNumber){
        console.log('Too high!')
    }
    else if (guess < magicNumber){
        console.log('Too low!')
    }
}