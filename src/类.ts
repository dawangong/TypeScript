class Person {
    protected name: string;
    private sex: string;
    // 构造函数也可以用protected修饰
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    public department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// 参数属性
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

// getter/setter
const password : string = "secret password";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (password && password == "secret password") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}

// 抽象类
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
