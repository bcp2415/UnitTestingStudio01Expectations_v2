const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  //testing code here...
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