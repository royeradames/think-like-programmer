console.log("sideways-triangle.ts");
/* 
    Write a program that uses only two output statements, count << '#' and count << '\n',
    to produce a pattern of hash sysmbols shaped like a sideways triangle:
    #
    ##
    ###
    ####
    ###
    ##
    #
 */

let column = 7;
let inverRow;
let countingDown = 2;
for (let rows = 1; rows <= column; rows++) {
  // on the 4 iteration start counting down
  if (rows > 4) {
    inverRow = rows - countingDown;
    console.log("#".repeat(inverRow));
    countingDown += 2;
  } else console.log("#".repeat(rows));
}

/* 
    Notes:
    #++
    if 4 iteration then count down
    if rows > 4
    then move to closing loop while using the counter has 
        don't change the counter instead use the counter for math that reduces
        the displayin pattern
        rows(5) - 2 = 3 
        rows(6) - 4 = 2
        rows(7) - 6 = 1
        rows - inverRows 
        inverseRow = rows - countingDown
        countingDown = 2 (Must take off the increment and remove one )
        countingDown++
 */

console.log("--------------------");
