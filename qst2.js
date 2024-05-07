//Function to find the longest word in an array of words:

function longestWord(words) {
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}
