function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  const num1 = 24;
  const num2 = 36;
  const result = gcd(num1, num2);
  console.log(`GCD of ${num1} and ${num2} is ${result}`);
  