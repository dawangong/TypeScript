// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function swim(animal) {
    animal.swim();
}
// 使用Cat接口定义的对象 作为swim参数编译不报错 执行会报错
var tom = {
    name: 'Tom',
    swim: function () { console.log('run'); }
};
swim(tom);
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = 0;
        return _this;
    }
    return ApiError;
}(Error));
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.statusCode = 200;
        return _this;
    }
    return HttpError;
}(Error));
function isApiError(error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
// 接口无法使用 instanceof
function isApiError1(error) {
    if (typeof error.code === "number") {
        return true;
    }
    return false;
}
