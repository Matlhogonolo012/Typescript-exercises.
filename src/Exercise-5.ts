class Calculator {
    sum (a: number, b: number): number {
        return a + b;
    }
    subtract (a:number, b: number): number {
        return a - b;
    }
    divide (a:number, b: number): number {
        if (b===0){
            return "ERROR";
        } else
        return a/b;
    }
    multiply (a:number, b: number): number {
        return a * b;
    }
}