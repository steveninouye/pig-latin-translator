const mocha = require('mocha');
const expect = require('chai').expect;
const { talkPigLatin, pigLatinTranslator } = require('./pig-latin-translator');

describe('Write a function that translates normal strings to Pig Latin', () => {
  it('should return string', () => {
    expect(talkPigLatin('hello')).to.be.a('string');
  });
  it('if given a string with a consonant at the beginning it should return the first vowel with the following letters attached to beginning consonants and "ay"', () => {
    expect(talkPigLatin('truthy')).to.equal('uthy-tray');
  });
  it('if given a string with a vowel at the beginning it should return the word with "ay" at the end', () => {
    expect(talkPigLatin('apple')).to.equal('apple-ay');
  });
});

describe('Write a function that translates Pig Latin words to normal words', () => {
  it('should return string', () => {
    expect(pigLatinTranslator('hello')).to.be.a('string');
  });
  it('translates pig latin to words that start with consonants', () => {
    expect(pigLatinTranslator('uthy-tray')).to.equal('truthy');
  });
  it('translates pig latin to words that start with vowels', () => {
    expect(pigLatinTranslator('apple-ay')).to.equal('apple');
  });
});
