// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function (string) {
  // твой код

  const arr = string.split(` `);
  // console.log(arr);
  let bigestWord = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > bigestWord.length) {
      bigestWord = arr[i];
    }
  }

  return bigestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
