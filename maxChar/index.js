// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let char = {};
    for (let strElement of str) {
        if (!char[strElement]) {
            char[strElement] = 1;
        } else {
            char[strElement]++;
        }
    }

    let value = 0;
    let key
    for (let element in char) {
        if (char[element] > value) {
            value = char[element];
            key = element;
        }
    }
    return key;
}

module.exports = maxChar;