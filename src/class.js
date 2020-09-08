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
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = "动物";
        this.age = 18;
    }
    Object.defineProperty(Animal.prototype, "introduce", {
        get: function () {
            return "\u540D\u5B57\u662F:" + this.name;
        },
        enumerable: true,
        configurable: true
    });
    Animal.desc = "动物描述";
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(props) {
        var _this = _super.call(this) || this;
        _this.type = "狗类";
        _this.name = props.name;
        return _this;
    }
    Dog.prototype.say = function () {
        return "\u6211\u7684\u52A8\u7269\u79CD\u7C7B\u662F:" + this.type;
    };
    return Dog;
}(Animal));
var one = new Dog({ name: "小狗一号" });
// [public, private, protect] | static & readonly
console.log(one.introduce, one.say(), one.age);
// super 是拓展父类constructor super 参数 = 父类参数+子类参数
