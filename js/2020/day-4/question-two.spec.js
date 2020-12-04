const { countValidPassports, setupValidateField } = require('./question-two');
const dataTest = require('./data-test');
const data = require('./data');

describe('Day 4 Question 2', () => {
  it('Test data', () => {
    expect(countValidPassports(dataTest)).toEqual(2);
  });

  it('Original data', () => {
    expect(countValidPassports(data)).toEqual(116);
  });

  it('Field tests byr', () => {
    expect(setupValidateField({ byr: '2002' })('byr')).toBe(true);
    expect(setupValidateField({ byr: '2003' })('byr')).toBe(false);
  });

  it('Field tests iyr', () => {
    expect(setupValidateField({ iyr: '2010' })('iyr')).toBe(true);
    expect(setupValidateField({ iyr: '2009' })('iyr')).toBe(false);
  });

  it('Field tests eyr', () => {
    expect(setupValidateField({ eyr: '2030' })('eyr')).toBe(true);
    expect(setupValidateField({ eyr: '2031' })('eyr')).toBe(false);
  });

  it('Field tests hgt', () => {
    expect(setupValidateField({ hgt: '60in' })('hgt')).toBe(true);
    expect(setupValidateField({ hgt: '190cm' })('hgt')).toBe(true);
    expect(setupValidateField({ hgt: '190in' })('hgt')).toBe(false);
    expect(setupValidateField({ hgt: '190' })('hgt')).toBe(false);
  });

  it('Field tests hcl', () => {
    expect(setupValidateField({ hcl: '#123abc' })('hcl')).toBe(true);
    expect(setupValidateField({ hcl: '#123abz' })('hcl')).toBe(false);
    expect(setupValidateField({ hcl: '123abc' })('hcl')).toBe(false);
  });

  it('Field tests ecl', () => {
    expect(setupValidateField({ ecl: 'brn' })('ecl')).toBe(true);
    expect(setupValidateField({ ecl: 'wat' })('ecl')).toBe(false);
  });

  it('Field tests pid', () => {
    expect(setupValidateField({ pid: '000000001' })('pid')).toBe(true);
    expect(setupValidateField({ pid: '0123456789' })('pid')).toBe(false);
  });
});
