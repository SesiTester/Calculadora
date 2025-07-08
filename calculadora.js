document.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".display");
    let currentInput = ""; 
    let operator = null; 
    let previousInput = ""; 

    document.querySelectorAll(".botao").forEach(botao => {
        botao.addEventListener("click", () => {
            const value = botao.textContent;

            if (value === "C") {
                
                currentInput = "";
                previousInput = "";
                operator = null;
                display.textContent = "0";
            } else if (value === "=") {
                
                if (operator && previousInput) {
                    const result = calculate(previousInput, currentInput, operator);
                    display.textContent = result;
                    currentInput = result.toString();
                    operator = null;
                    previousInput = "";
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                
                operator = value;
                previousInput = currentInput;
                currentInput = "";
                display.textContent = `${previousInput} ${operator}`; 
            } else if (value === ".") {
                
                if (!currentInput.includes(".")) {
                    currentInput += value;
                    display.textContent = `${previousInput} ${operator || ""} ${currentInput}`; 
                }
            } else {
                
                currentInput += value;
                display.textContent = `${previousInput} ${operator || ""} ${currentInput}`; 
            }
        });
    });

    
    function calculate(num1, num2, operator) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (operator === "/" && n2 === 0) {
            return "Erro"; 
        }

        switch (operator) {
            case "+":
                return n1 + n2;
            case "-":
                return n1 - n2;
            case "*":
                return n1 * n2;
            case "/":
                return n1 / n2;
            default:
                return 0;
        }
    }
});