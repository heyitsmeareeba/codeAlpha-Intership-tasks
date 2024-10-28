document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('button').forEach(function(button) {
        button.addEventListener('click', function() {
            let value = button.textContent;
            switch (value) {
                case 'AC':
                    clearScreen();
                    break;
                case 'del':
                    deleteLastCharacter();
                    break;
                case '+':
                    appendToAddition();
                    break;
                case '-':
                    appendToSubtraction();
                    break;
                case 'x':
                    appendToMultiplication();
                    break;
                case '÷':
                    appendToDivision();
                    break;
                case 'CALCULATE':
                    calculate();
                    break;
                case '%':
                    percentage();
                    break;
                case '√':
                    sqrt();
                    break;
                case 'x2':
                    square();
                    break;
                case '±':
                    negate();
                    break;
                case '.':
                    appendDecimal();
                    break;
                default:
                    appendToScreen(value);
            }
        });
    });

    function appendToScreen(value) {
        let screenValue = document.getElementById('screen').textContent;
        if (value === '.' && screenValue === '') {
            document.getElementById('screen').textContent += '0';
        }
        if (value === '.' && screenValue.includes('.')) {
            return;
        }
        document.getElementById('screen').textContent += value;
    }

    function appendToAddition() {
        let screenValue = document.getElementById('screen').textContent;
        if (screenValue !== '' && !isNaN(parseFloat(screenValue.charAt(screenValue.length - 1)))) {
            document.getElementById('screen').textContent += '+';
        }
    }

    function appendToSubtraction() {
        let screenValue = document.getElementById('screen').textContent;
        if (screenValue !== '' && !isNaN(parseFloat(screenValue.charAt(screenValue.length - 1)))) {
            document.getElementById('screen').textContent += '-';
        }
    }

    function appendToMultiplication() {
        let screenValue = document.getElementById('screen').textContent;
        if (screenValue !== '' && !isNaN(parseFloat(screenValue.charAt(screenValue.length - 1)))) {
            document.getElementById('screen').textContent += 'x';
        }
    }

    function appendToDivision() {
        let screenValue = document.getElementById('screen').textContent;
        if (screenValue !== '' && !isNaN(parseFloat(screenValue.charAt(screenValue.length - 1)))) {
            document.getElementById('screen').textContent += '÷';
        }
    }

    function clearScreen() {
        document.getElementById('screen').textContent = '';
    }

    function deleteLastCharacter() {
        let screenValue = document.getElementById('screen').textContent;
        document.getElementById('screen').textContent = screenValue.slice(0, -1);
    }

    function square() {
        let screenValue = document.getElementById('screen').textContent;
        let result = Math.pow(parseFloat(screenValue), 2);
        document.getElementById('screen').textContent = result;
    }

    function sqrt() {
        let screenValue = document.getElementById('screen').textContent;
        let result = Math.sqrt(parseFloat(screenValue));
        document.getElementById('screen').textContent = result;
    }

    function negate() {
        let screenValue = document.getElementById('screen').textContent;
        let result = parseFloat(screenValue) * -1;
        document.getElementById('screen').textContent = result;
    }

    function appendDecimal() {
        let screenValue = document.getElementById('screen').textContent;
        if (!screenValue.includes('.')) {
            document.getElementById('screen').textContent += '.';
        }
    }

    function percentage() {
        let screenValue = document.getElementById('screen').textContent;
        let result = parseFloat(screenValue) / 100;
        document.getElementById('screen').textContent = result;
    }

    function calculate() {
        let screenValue = document.getElementById('screen').textContent;
        let result;

        try {
            let expression = screenValue.replace(/x/g, '*').replace(/÷/g, '/');
            result = eval(expression);
            document.getElementById('screen').textContent = result;
        } catch (error) {
            console.error('Error evaluating expression:', error);
            document.getElementById('screen').textContent = 'Error';
        }
    }
});
