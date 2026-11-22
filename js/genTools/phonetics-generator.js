// const allLetters = ["A", "B", "D", "E", "F", "G", "H", "I", "L", "M", "N", "O", "R", "S", "U", "V", "Z"];

const vowels = ["A", "E", "I", "O", "U"]

const consonants = ["B", "D", "F", "G", "H", "L", "M", "N", "R", "S", "V", "Z"]

// const blends = ["BA", "BE", "BI", "BO", "BU", "DA", "DE", "DI", "DO", "DU", "FA", "FE", "FI", "FO", "FU", "HA", "HE", "HI",
//     "HO", "HU", "LA", "LE", "LI", "LO", "LU", "MA", "ME", "MI", "MO", "MU", "NA", "NE", "NI", "NO", "NU", "RA", "RE", "RI",
//     "RO", "RU", "SA", "SE", "SI", "SO", "SU", "VA", "VE", "VI", "VO", "VU", "ZA", "ZE", "ZI", "ZO", "ZU"
// ];

export function generateWords(length, numberOfWords) {
    var words = [];
    for (let i = 0; i < numberOfWords; i++) {
        var VorC = Math.random(); // 0 or 1
        var word = "";
        for (let i = 0; i < length; i++) {
            if (VorC == 0) {
                word += getRandomItem(vowels);
                VorC = 1;
            } else {
                word += getRandomItem(consonants);
                VorC = 0;
            }
        }
        words.push(word);
    }
    return words;
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}