// boolean
const isDone : boolean = false;
// number
const a : number = 3;
// string
const b : string = '';
const c : string =  `${b}`;
// array
const arr : number[] = [1];
const arr2 : Array<number> = [2];
// tuple
const tuple : [number, string] = [1, ''];
// enum
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
// any
let d : any = 0;
d = '';
const arr3 : any = ['', 1, 2, isDone];
// never
// object
// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


