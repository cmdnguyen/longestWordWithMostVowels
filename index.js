function longestWordWithMostVowels(sentence) {
  // Function to count vowels
  function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        count++;
      }
    }
    return count;
  }

  // Split the sentence into words, filter out non-letter characters
  const words = sentence.split(/\s+/).filter(word => /^[a-zA-Z]+$/.test(word));

  if (words.length === 0) {
    return null; // No valid words found
  }

  let longestWord = '';
  let mostVowels = 0;
  // Checks for the longest word with the most vowels
  for (const word of words) {
    const vowelCount = countVowels(word);
    if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > mostVowels)) {
      longestWord = word;
      mostVowels = vowelCount;
    }
  }

  return longestWord;
}
// Sample usage
var sentence = 'Smart people learn from everything and everyone average people from their experience stupid people already have all the answers'
var longestWord = longestWordWithMostVowels(sentence)
console.log (longestWord)