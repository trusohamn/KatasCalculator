function eval(expression) {
    const regex = /^(\d+)[\s]*(\+|-|\*|\/)[\s]*(\d+)$/;

    expression = expression.trim();
    const group = expression.match(regex);
    if (group === null) {
        throw new Error('invalidExpression');
    }
    const x = parseInt(group[1]);
    const y = parseInt(group[3]);
    switch (group[2]) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y == 0) {
                throw new Error('zeroDivisionError');
            }
            return x / y;
    }
}

module.exports.eval = eval;
