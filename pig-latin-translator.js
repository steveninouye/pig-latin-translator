const vowels = ['a', 'e', 'i', 'o', 'u'];

function talkPigLatin(string) {
  const stringArray = string.split('');
  let test;
  stringArray.forEach((element, index) => {
    if (vowels.indexOf(element) !== -1 && test === undefined) {
      test = index;
    }
  });
  const beggining = stringArray.slice(test).join('');
  const end = stringArray.slice(0, test).join('');
  return beggining + '-' + end + 'ay';
}

function pigLatinTranslator(string) {
  const stringArray = string.split('');
  stringArray.splice(-2);
  const indexOfDash = stringArray.indexOf('-');
  const beggining = stringArray.slice(indexOfDash + 1).join('');
  const end = stringArray.slice(0, indexOfDash).join('');
  return beggining + end;
}

module.exports = { pigLatinTranslator, talkPigLatin };
