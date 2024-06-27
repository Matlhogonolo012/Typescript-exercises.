"use strict";
class Calculator {
    sum(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    divide(a, b) {
        if (b === 0) {
            return "ERROR";
        }
        else
            return a / b;
    }
    multiply(a, b) {
        return a * b;
    }
}
//# sourceMappingURL=Exercise-5.js.map