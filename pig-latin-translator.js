const vowels = ['a', 'e', 'i', 'o', 'u'];

function pigLatinTranslator(string) {
  const stringArray = string.split('');
  let test;
  stringArray.forEach((element, index) => {
    if (vowels.indexOf(element) !== -1 && test === undefined) {
      test = index;
    }
  });
  const beggining = stringArray.slice(test).join('');
  const end = stringArray.slice(0, test).join('');
  return beggining + end + 'ay';
}
module.exports = { pigLatinTranslator };
