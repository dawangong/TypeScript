// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 值 as 类型 react tsx只支持这个 统一用这个

// <类型>值

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

// 使用Cat接口定义的对象 作为swim参数编译不报错 执行会报错
const tom: Fish = {
    name: 'Tom',
    swim() { console.log('run') }
};
swim(tom);


class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}


interface ApiError1 extends Error {
    code: number;
}
interface HttpError1 extends Error {
    statusCode: number;
}
// 接口无法使用 instanceof
function isApiError1(error: Error) {
    if (typeof (error as ApiError1).code === 'number') {
        return true;
    }
    return false;
}


