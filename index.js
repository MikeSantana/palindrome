
const alphabetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


function main(params) {
    let word = [];
    let finalNumber = 0;
    let result;
    let arrayWord = [];

    for (let j = 0; j < 10000; j++) {

        let numberLetters = Math.floor(Math.random() * (5 - 3) + 3); //Generates a random number between 3 and 5

        for (let i = 0; i < numberLetters; i++) {
            let aleatoryItems = Math.floor(Math.random() * alphabetLetters.length);
            word.push(alphabetLetters[aleatoryItems]);
        }

        let fullWord = word.join('');

        while (word.length) { word.pop(); } // clearing array

        arrayWord.push(fullWord);
        let reversedWord = fullWord.split("").reverse().join('')

        if (fullWord === reversedWord) {
            let counter = 1;
            finalNumber = counter + finalNumber;
        }

    }

    if (finalNumber > 0) {
        result = finalNumber;

    } else {
        result = 0;
    }


    return result;
}

console.log(main(alphabetLetters))