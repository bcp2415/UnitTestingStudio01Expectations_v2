const launchOutput = require('../launchCodeRocks.js');

class Test {
  constructor(returnString, divisibleBy, inputNumber) {
    this.returnString = returnString;
    this.divisibleBy = divisibleBy;
    this.inputNumber = inputNumber;
  }
}

const phr1 = 'Launch';
  const phr2 = 'Code';
  const phr3 = 'Rocks!';
  const phr4 = '(CRASH!!!!)';
  const phr5 = 'Rutabagas! That doesn\'t work.'

const test1 = new Test(phr1, 2, 2);
const test2 = new Test(phr2, 3, 3);
const test3 = new Test(phr3, 5, 5);
const test4 = new Test(phr1 + phr2, '2 and 3', 6);
const test5 = new Test(phr2 + phr3, '3 and 5', 15);
const test6 = new Test(phr1 + ' ' + phr3 + ' ' + phr4, '2 and 5', 10);
const test7 = new Test(phr1 + phr2 + ' ' + phr3, '2, 3, and 5', 30);
const test8 = new Test(phr5, 'NOT 2, 3, or 5', 7);

const tests = [test1, test2, test3, test4, test5, test6, test7, test8]

describe("launchOutput", function(){

  //testing code here...
  for (i = 0; i < tests.length; i++) {
    let num = tests[i].inputNumber;
    it(`should return ${tests[i].returnString} when input is divisible by ${tests[i].divisibleBy} evenly`, function() {
      expect(launchOutput(num)).toEqual(tests[i].returnString);
    });
  };

  it("should return 'Launch' when num is divisible by 2 evenly", function() {
    expect(launchOutput(2)).toEqual('Launch');
  });

  it("should return 'Code' when num is divisible by 3 evenly", function() {
    expect(launchOutput(3)).toEqual('Code');
  });

  it("should return 'Rocks!' when num is divisible by 5 evenly", function() {
    expect(launchOutput(5)).toEqual('Rocks!');
  });

  it("should return 'LaunchCode!' when num is divisible by both 2 and 3 evenly", function() {
    expect(launchOutput(6)).toEqual('LaunchCode!');
  });

  it("should return 'Code Rocks!' when num is divisible by both 3 and 5 evenly", function() {
    expect(launchOutput(15)).toEqual('Code Rocks!');
  });

  it("should return 'Launch Rocks!' when num is divisible by both 2 and 5 evenly", function() {
    expect(launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)');
  });

  it("should return 'LaunchCode Rocks!' when num is divisible by 2, 3, and 5 evenly", function() {
    expect(launchOutput(30)).toEqual('LaunchCode Rocks!');
  });

  it("should return 'Rutabagas! That doesn't work.' if num isn't divisible by 2, 3 or 5", function() {
    expect(launchOutput(7)).toEqual('Rutabagas! That doesn\'t work.');
  });

});