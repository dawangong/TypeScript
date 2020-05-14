// 可选属性
interface Person1 {
    name: string;
    age?: number;
}

let tom: Person1 = {
    name: 'Tom'
};

interface Person2 {
    name: string;
    // age?: number;
    [propName: string]: string;
}

// 接口 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
let bob: Person2 = {
    name: 'Tom',
    // age: 25,
    gender: 'male'
};

interface Person3 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let dave: Person3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let ad: Person4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// 只读属性 创建后不可修改
// ad.id = 9527;

interface Person5 {
    readonly id ?: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let dd: Person5 = {
    name: 'Tom',
    gender: 'male'
};

// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// dd.id = 89757;





