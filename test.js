const mocha = require('mocha');
const expect = require('chai').expect;
const pigLatinTranslator = require('./pig-latin-translator').pigLatinTranslator;

describe('hello', () => {
  it('should return string', () => {
    expect(pigLatinTranslator('hello')).to.be.a('string');
  });
  it('if given a string with a consonant at the beginning it should return the first vowel with the following letters attached to beginning consonants and "ay"', () => {
    expect(pigLatinTranslator('truthy')).to.equal('uthytray');
  });
  it('if given a string with a vowel at the beginning it should return the word with "ay" at the end', () => {
    expect(pigLatinTranslator('apple')).to.equal('appleay');
  });
});
