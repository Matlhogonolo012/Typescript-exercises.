// 1.
class person {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name =name;
        this.age =age;
    }
}
    getDetails(): string {
        return "My name is " + this.name + "I will be turning" + this.age + "this year";
}

// 2.
class Person {
    private socialSecurityNumber: String;
    name: string;
    age: number;

    constructor ( name: string, age: number, socialSecurityNumber:string ) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
}
}
getAge() = number {
    return this.age;
}