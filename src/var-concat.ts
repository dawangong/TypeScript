// 接口、类、函数 合并

// 接口声明合并 合并的属性的类型必须是唯一的！
interface Alarmse {
    price: number;
}
interface Alarmse {
    weight: number;
}

// 函数重载合并
// function reverse(x: number): number;
// function reverse(x: string): string;


// 类的合并 同 接口合并
