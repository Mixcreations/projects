let space1 = '0';
let space2 = '0';
let space3 = '0';
let space4 = 'X';
let space5 = 'X';
let space6 = ' ';
let space7 = 'O';
let space8 = ' ';
let space9 = ' ';

console.log(`   |   | `);
console.log(` ${space1} | ${space2} | ${space3} `);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");
console.log(` ${space4} | ${space5} | ${space6} `);
console.log("   |   |");
console.log("-----------");
console.log("   |   |");   
console.log(` ${space7} | ${space8} | ${space9} `);
console.log("   |   |");
 
if (space1 == space2 && space2 == space3) {
    console.log('You win');
}
else {
    console.log("Your not winning");
}