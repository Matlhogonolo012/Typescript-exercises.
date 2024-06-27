// 1.
function sumNumbers(num1: number, num2: number): number {
return num1 + num2;
}

// 2.
function returnFixedNumber (): number {
    return 100;
}

// 3.
function convertCase(input: string, upperCase: boolean = true): string
    if (upperCase) {
        return input.upperCase();
    } else {
        return input.lowerCase();
    }
