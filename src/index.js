const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = [];
  let arr = expr.split('*').filter((item) => item !== '');
  for(let i = 0; i < arr.length; i++) {
    let word = [];
    for(let j = 0; j <= arr[i].length; j = j+10) {
      if(j < arr[i].length) {
       let encodedChar = arr[i].slice(j, j+10);
       word.push(encodedChar)
      }      
    }
    result.push(word);
  }
  for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < result[i].length; j++) {
      let decode = [];
      for(let k = 0; k < result[i][j].length; k = k + 2) {
        if(result[i][j][k] === '1' && result[i][j][k+1] === '0') {
          decode.push('.');
        } else if(result[i][j][k] === '1' && result[i][j][k+1] === '1') {         
          decode.push('-');
        }
      }
      result[i][j] = decode.join('');
    }
  }
  return result.map(word => word.map(letter => MORSE_TABLE[letter]).join('')).join(' ')
}

decode("000000001100101010100000000010**********00111110110000101011000000101000111011100000111011**********00111010100000101110000011111100001011110000001110**********001010111000001111110011101011**********00101111110000101011000000111100101111100000101010**********0000111111001010101100000000100000101110**********000000001100101010100000000010**********0010111010000000101100111110100011101111**********000011101000001111110000111110")
module.exports = {
    decode
}