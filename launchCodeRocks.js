function launchOutput(num){
  //your code here
  const phr1 = 'Launch';
  const phr2 = 'Code';
  const phr3 = 'Rocks!';
  const phr4 = '(CRASH!!!!)';
  const phr5 = 'Rutabagas! That doesn\'t work.'



  
  if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
    return 'LaunchCode Rocks!';
  } else if (num % 2 === 0 && num % 3 === 0) {
    return phr1 + phr2 + '!';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return phr2 + ' ' + phr3;
  } else if (num % 2 === 0 && num % 5 === 0) {
    return phr1 + ' ' + phr3 + ' ' + phr4;
  } else if (num % 2 === 0) {
    return phr1;
  } else if (num % 3 === 0) {
    return phr2;
  } else if (num % 5 === 0) {
    return phr3;
  } else {
    return phr5;
  };
}

module.exports = launchOutput;