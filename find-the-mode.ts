/* 
  In statistics, the mode of a set of values is the value that appears most often. 
  Write code that processes an array of survey data, where survey takers have responded to a question with a number in the range 1-10, 
  to determine the mode of the data set. For our purpose, if multiple modes exist, any may be chosen. 
 */
console.log("find-the-mode.ts");
const survey = [4, 7, 3, 8, 9, 7, 3, 9, 9, 3, 3, 10];
function findMode(numberList: number[]) {}
console.log("------------------------------------");

/* Note:
  mode = the number that appears the most (highest frequency).
  * Array Only solution *
  - sort the list
  - count the number and it's frequency.
    - if a number has a higher frequency replace that number as the mode
      - currentNumber
      - currentFriquency
      - modeNumber
      - modeFrequency 
  * dictionary *
  - count the unic number appearances
    - loop through the array and 
    - make a object that defines the value as key and 
    - initialize the value at 1 on first occureance or 
      - adds +1 to the value
  - return the higest frequencent value key
    - loop through the object
    - keep track of the highest frequency value key
    - after the loop is done return the highest frequency value as the mode
 */
