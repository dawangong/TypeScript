// 使用「类型 + 方括号」来表示数组
var fibonacci = [1, 1, 2, 3, 5];
var fibonacci2 = [1, '1', 2, 3, 5];
// 我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
var fibonacci3 = [1, 1, 2, 3, 5];
var fibonacci4 = [1, '1', 2, 3, 5];
var fibonacci5 = [1, 1, 2, 3, 5, '1'];
// 类数组不能用定义数组的方法 使用接口（复杂）
function sum1() {
    // let args: number[] = arguments;
    var args = arguments;
}
// 事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection
function sum2() {
    var args = arguments;
}
var list = ['aaa', 25, { website: 'http://xcatliu.com' }];
