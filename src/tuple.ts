let tom: [string, number];
tom[0] = 'Tom';

// 需要一次给所有项赋值
// let tom: [string, number];
// tom = ['Tom'];


let tom1: [string, number];
tom1 = ['Tom', 25];
tom1.push('male');
// tom1.push(true);
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：


// 2.6 之后取消了越界 要求元组赋值必须类型和个数都对应
