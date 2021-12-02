console.log("half-of-square.ts");
/* Write a program that uses only two output statements, console.log # and \n to proudce a pattern of hash symbols shaped like half of a perfect 5 x 5 squares (or a right tirangle):
* For TS use console.log and "#"
#####
####
###
##
#
*/

// for (let i = 0; i < 5; i++) {
//   console.log("######");
//   console.log("\n");
// }
// console.log("######");
// console.log("#####");
// console.log("####");
// console.log("###");
// console.log("##");
// console.log("#");

let size = 5;
for (let rows = 0; rows < size; rows++) {
  // size - (rows) = number of #
  console.log("#".repeat(size - rows));
}

console.log("-------------------");
