/* 
    A message has been encoded as a text stream that is to be read character by character. The stream contains a series of comma-delimited integers, each a positive number capable of being a represented by a C++ int. However, the character represented by a particular integer depends on the current decoding made. There are three modes: uppercacse, lowercase, and punctuation.

    In uppercase mode, each integer represents an uppercase letter: The integer module 27 indicates the letter of the alphabet ( where 1 = A and so on). So an input value of 143 in uppercase mode would yield the letter H because 143 module 27 is 8 and H is the eighth in the alphabet.
    The lower mode works the same but with lowecase letters; the remainder of dividing the integer by 27 represents the lowercase letter ( 1= a and so on). Soan input value of 56 in lowercase mode would yield the letter b because 56 modula 27 is 2 and b is the second letter in the alphabet.

    In punctuation mode, the integer is intead considered modulo 9, with the interpretation given by Table 2-3 below. So 19 would yield an exclamation point because 19 module 9 is 1.

    At the beginning of each message, the decoding mode is uppercase letters. Each time the module operation (by 27 or 9, depending on mode) results in 0, the decoding mode switches. If the current mode is uppercase, the mode switches to lowercase letters. If the current mode is lowercase, the mode switches to punctuation, and if it is punctuation, it switches back to uppercase.
 */
console.log("decode-message.ts");
const input = "18,12312,171,763,98423,1208,216,11,500,18,241,0,32,20620,27,10";
const message = decoder(input);
console.log(message);
function decoder(messageString: string) {
  /* convert the message into an array of numbers */
  const messageArray = messageString.split(",");
}

console.log("------------------------------------");
