export const calculator = (a,b,operator) => {
    const operators = {
            "+" : (a, b) => a + b,
            "-" : (a, b) => a - b,
            "*" : (a, b) => a * b, 
            "/" : (a, b) => a / b
    }

    let firstOperand = Number(a);
    let secondOperand = Number(b);

    return operators[operator](firstOperand,secondOperand);
}


