const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.slice(i, i + 10));
    }
    const newArr = arr.map((item) => {
        return parseInt(item) || item;
    });

    const arrS = newArr.map(elem => {
        const twoElementsArr = [];
        const item = String(elem);
        if (item.includes('*')) twoElementsArr.push(' ');
        else {
            for (let i = 0; i < item.length; i += 2) {
                if (+`${item[i]}${item[i + 1]}` === 10) {
                    twoElementsArr.push('.');
                } else {
                    twoElementsArr.push('-');
                }
            }
        }
        return twoElementsArr.join('');
    }).map(element => {
        return MORSE_TABLE[element] || ' ';
    }).join('');
    return arrS;
}

module.exports = {
    decode
}