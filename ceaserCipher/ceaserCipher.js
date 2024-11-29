export const cipher = (string, k) => {
    return string
    .split('')
    .map((item) => {
        let t = item.charCodeAt(0);
        return (check_t_value(t) ? item : (getCipherValue(item, k)))
    })
    .join('');
}

function check_t_value(range) {
    if((range >= 65 && range <= 90) || (range >= 97 && range <= 122)) return false;
    return true;
}

function getCipherValue(letter, offset) {
    let originLetter = "A";
    if(letter.charCodeAt(0) >= 97) originLetter = "a";

    let position =  (originLetter.charCodeAt(0) + ((letter.charCodeAt(0) - originLetter.charCodeAt(0)) + offset)%26);

    return String.fromCharCode(position);
}

// console.log(cipher("hello"));

// console.log(getCipherValue('Z',3));

// let k = 

// console.log(k);

console.log(cipher("Hello, World!",3));