var tom = {
    name: 'Tom'
};
// 接口 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
var bob = {
    name: 'Tom',
    // age: 25,
    gender: 'male'
};
var dave = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
var ad = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
var dd = {
    name: 'Tom',
    gender: 'male'
};
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// dd.id = 89757;
