// 接口
interface objValue {
    label: string;
}

function add(obj: objValue) {
    console.log(obj);
}

// 可选接口
interface SquareConfig {
    color?: string;
    width?: number;
}

function reduce(square: SquareConfig) {
    console.log(square);
}

// 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}

const p1: Point = {x: 1, y: 2};

// 只读数组
let ro: ReadonlyArray<number> = [1, 2, 3];

// 其他属性
interface SquareSp {
    color?: string;
    width?: number;
    // 可以是coloru 不报错
    [propName: string]: any;
}

// 函数
interface SearchFunc {
    // 参数/返回值
    (source: string, subString: string): boolean;
}

function mySearch(src, sub): SearchFunc {
    let result = src.search(sub);
    return result > -1;
}

// 索引及value类型 （索引签名）
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray = ["Bob", "Fred"];
console.log(myArray[0]);


