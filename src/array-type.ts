// 使用「类型 + 方括号」来表示数组
let fibonacci: number[] = [1, 1, 2, 3, 5];
let fibonacci2: (number|string)[] = [1, '1', 2, 3, 5];
// 我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
let fibonacci3: Array<number> = [1, 1, 2, 3, 5];
let fibonacci4: Array<number|string> = [1, '1', 2, 3, 5];

interface NumberArray {
    [index: number]: number|string;
}
let fibonacci5: NumberArray = [1, 1, 2, 3, 5, '1'];

// 类数组不能用定义数组的方法 使用接口（复杂）
function sum1() {
    // let args: number[] = arguments;
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection
function sum2() {
    let args: IArguments = arguments;
}

let list: any[] = ['aaa', 25, { website: 'http://xcatliu.com' }];
