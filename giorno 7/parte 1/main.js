document.getElementById('equationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const input = document.getElementById('equationInput').value;
    if (!input.trim()) {
        alert('Please enter some equations.');
        return;
    }
    
    const lines = input.trim().split('\n');
    let validSum = 0;

    const evaluateExpression = (numbers, operators) => {
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === '+') {
                result += numbers[i + 1];
            } else if (operators[i] === '*') {
                result *= numbers[i + 1];
            }
        }
        return result;
    };

    const generateCombinations = (numbers) => {
        const operators = ['+', '*'];
        const combinations = [];

        const backtrack = (currentOperators, index) => {
            if (currentOperators.length === numbers.length - 1) {
                combinations.push(currentOperators);
                return;
            }
            for (let i = 0; i < operators.length; i++) {
                backtrack([...currentOperators, operators[i]], index + 1);
            }
        };

        backtrack([], 0);
        return combinations;
    };

    for (let line of lines) {
        const [testValue, numbersStr] = line.split(':').map(e => e.trim());
        const numbers = numbersStr.split(' ').map(Number);

        const possibleCombinations = generateCombinations(numbers);
        let foundValid = false;

        for (let combination of possibleCombinations) {
            if (evaluateExpression([...numbers], combination) === Number(testValue)) {
                foundValid = true;
                break;
            }
        }

        if (foundValid) {
            validSum += Number(testValue);
        }
    }

    document.getElementById('results').innerText = `Total calibration result: ${validSum}`;
});
