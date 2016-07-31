/* Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes.
Use console.log() to output the value of the counter variable each time through the loop.
Stop execution of the loop if the counter variable's value is greater than 120. */

for (var i = 5; i < 120; i += 5) {
  console.log("The current value is: " + i);
}

/* Write a for loop with a counter variable initialized at 4096.
Each time the loop executes divide the counter variable's value by 2.
Use console.log() to output its value every time. When the counter variable's value is 1, stop execution. */

for (var i = 4096; i > 1; i /= 2) {
  console.log("The current value is: " + i);
}

/* Create an array that contains the names of American Presidents.
Loop over that array with a for loop, and use string concatenation with console.log() to output
the order and name of each President (see example below). */

var americanPresidents = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Grant", "Rutherford Hayes", "James Garfield", "Chester Arthur", "Grover Cleveland", "Benjamin Harrison", "Grover Cleveland", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin Roosevelt", "Harry Truman", "Dwight Eisenhower", "John Kennedy", "Lyndon Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan", "George Bush", "Bill Clinton", "George Bush", "Barack Obama"]

for (var i = 0; i < americanPresidents.length; i++) {
  console.log("The " + (i + 1) + " President was " + americanPresidents[i]);
}

/* Use can use another kind of for loop to iterate over objects. Iterate over the
object below and use console.log() to output the names of the keys in the
object. */

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
  console.log(Object.keys(antSpecies));
  break;
}








