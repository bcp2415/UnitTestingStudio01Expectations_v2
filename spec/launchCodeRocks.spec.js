const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  //testing code here...
  it("should return 'Launch' when num is divisible by 2 evenly", function() {
    expect(launchOutput(2)).toEqual('Launch');
  })

});