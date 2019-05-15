// Activity 1
/* let favWebSites = [
    "iammickwhite.com",
    "youtube.com",
    "codenantion.com"
]
favWebSites.unshift("apple.com") */
/* favWebSites.pop() */
/* console.log(favWebSites); */

// Activity 1a Take Order
/* let orderCount = 0;
const takeOrder = (topping, topping2, topping3) => {
    console.log(`Pizza with ${topping} and ${topping2} and ${topping3}`);
    orderCount++;
} 
takeOrder("Pineapple", "Cheese", "Mushrooms"); */

// Activity 2 cash Machine
/* let pinNumber = 1234;
let amount = 100; 
let accNum = 355599; */

/* const dispenseCash = (amount, accNum) => {
    if (pinNumber == 1234 && accNum == 355599) {
        console.log(`Withdraw ${amount} from the account ${accNum}`);
}
    else {
        console.log("wrong pin");
    }
dispenseCash(100, 355599); */

/* let myMusic = [
    "The Specials - Too Young",
    "Madness - One Step Beyond",
    "Stevie Wonder - Supersticious",
    "Michael Jackson Smooth Criminal",
    "Prince - Red Beret"
]; */
/* console.log(myMusic); */
//Splice
/* myMusic.splice(3, 1, "Nick Gordon", "Estelle");
console.log(myMusic); */

//Push
/* let pushed = myMusic.push('Tom jones - Unusual');
console.log(myMusic);
console.log(pushed); */
// added tom jones to the end of the list

//Slice
/* console.log(myMusic.slice(2)); */
//Takes out the first two values

//UnShift
/*  let myMusic = [
    "The Specials - Too Young",
    "Madness - One Step Beyond",
    "Stevie Wonder - Supersticious",
    "Michael Jackson - Smooth Criminal",
    "Prince - Red Beret"
];
myMusic.unshift('michael');
console.log(myMusic); */ 

// Generate 6 Random numbers
/* for (i=0; i < 6; i++ ) {
    console.log(Math.floor(Math.random() * 49 + 1));
} */

/*Loop through 4 films  */
var favMovies = ['Papillion', 'Rocky', "Click", "Rush Hour"
]
console.log(favMovies.push("Spartacus", "Trespass"))
for(filmIndX = 0; filmIndX < favMovies.length; filmIndX++) {
    console.log(favMovies[filmIndX])
}

 
    let films = ["Papillion", "Spartacus", "Ghostbusters", "Crash"];
    for (let i = 0; i < films.length; i++) { //<<Loop
        console.log(films[i]);
    }
    const filmCheck = (film1) => {
        if (film1[2] === "Ghostbusters") {
            return film1;
            console.log("yey it's ghostbusters");
        }
        else {
            const newLocal = "booo, we  want ghostbusters";
            console.log(newLocal);
            return film1;
        }
    };

    filmCheck(films);

