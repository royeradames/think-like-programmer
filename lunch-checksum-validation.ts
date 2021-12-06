console.log("lunch-checksum-validation");
/* 
The luhn formula is a widely used system for validating identification numbes. 
Using the original number: 
- double the value of every other digit. 
- add the values of the individual digits together 
    - if a double value now has two digits, add the digits individually. 
- The identification number is valid if the sum is divisble by 10.
Write a program that takes an identificaiton number of arbitrary length and process each character before reading the next one.
*/
function lunchFormula(identificationNumbers: string) {
  // separete all numbers into an array
  /* [ '1', '7', '6', '2', '4', '8' ] */
  const idNum = identificationNumbers.split("");
  const addedDigits = doubleEachDigit(idNum);
  function doubleEachDigit(idNum: string[]) {
    let sum = 0;
    idNum.forEach((stringNumber, index) => {
      const number = Number(stringNumber);
      if (isEveryOtherDigit(index)) sum += handleDoubleDigits(number * 2);
      else sum += number;
    });
    return sum;

    /*  */
    function isEveryOtherDigit(indexPosition: number) {
      const isEven = (indexPosition + 1) % 2 === 0;
      if (isEven) return true;
      else return false;
    }
    function handleDoubleDigits(number: number) {
      const stringNumber = number.toString();
      const separateDigitPair = stringNumber.split("");

      let sum = 0;
      separateDigitPair.forEach((digit) => {
        sum += Number(digit);
      });

      return sum;
    }
  }

  identifyNumber(addedDigits);
  function identifyNumber(addedDigits: number) {
    const isDivisibleBy10 = addedDigits % 10 === 0;
    if (isDivisibleBy10) console.log("valid");
    else console.log("invalid");
  }
}
const identificationNumbers = "1762483";
lunchFormula(identificationNumbers);
console.log("-------------------------");
