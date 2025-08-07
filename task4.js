const statement = 'I am a hard working person';

const words = statement.split(' ');  // Split into array of words
let reversed = '';

for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
    if (i > 0) {
        reversed += ' '; // Add space between words
    }
}

console.log(reversed); 
 // Output: "person working hard a am I"

const reversedWord = words.reverse().join(' ');  
console.log(reversedWord);
