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
    // write your solution here
    const LETTER_PATTERN = /.{10}/g;
    const SYMBOL_PATTERN = /.{2}/g;
    const MORSE_TABLE_NUMBER = {
        '10': '.',
        '11': '-',
        '00': '',
    }

    let letterArray = expr.match(LETTER_PATTERN);
    let output = '';
    for (const letter of letterArray) {
        let currLet = '';
        if (letter == '**********') {
            output = output + ' ';
        } else {
            let symbolArray = letter.match(SYMBOL_PATTERN);
            symbolArray.forEach(element => {currLet = currLet + MORSE_TABLE_NUMBER[element]});
            output = output + MORSE_TABLE[currLet];
        }

    }
    return output;
}

module.exports = {
    decode
}