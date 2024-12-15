document.getElementById('calculate').addEventListener('click', () => {
    const input = document.getElementById('input').value.trim();
    const lines = input.split('\n');
    let total = 0;
  
    lines.forEach(line => {
      const [testValue, numbersStr] = line.split(':').map(s => s.trim());
      const test = parseInt(testValue, 10);
      const numbers = numbersStr.split(' ').map(Number);
  
      if (canProduce(test, numbers)) {
        total += test;
      }
    });
  
    document.getElementById('result').textContent = `Total Calibration Result: ${total}`;
  });
  
  function canProduce(target, numbers) {
    const operators = ['+', '*', '||'];
    const sequences = generateSequences(numbers.length - 1, operators);
  
    for (const sequence of sequences) {
      const result = evaluateLeftToRight(numbers, sequence);
      if (result === target) {
        return true;
      }
    }
  
    return false;
  }
  
  function generateSequences(length, operators) {
    if (length === 0) return [[]];
    const results = [];
  
    for (const op of operators) {
      const subSequences = generateSequences(length - 1, operators);
      subSequences.forEach(seq => {
        results.push([op, ...seq]);
      });
    }
  
    return results;
  }
  
  function evaluateLeftToRight(numbers, operators) {
    let result = numbers[0]; // Start with the first number
  
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const nextNumber = numbers[i + 1];
  
      if (operator === '+') {
        result += nextNumber;
      } else if (operator === '*') {
        result *= nextNumber;
      } else if (operator === '||') {
        result = parseInt(result.toString() + nextNumber.toString(), 10);
      }
    }
  
    return result;
  }
  