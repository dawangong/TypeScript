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
var Animals = /** @class */ (function () {
    function Animals() {
        this.name = "动物";
        this.age = 18;
    }
    Object.defineProperty(Animals.prototype, "introduce", {
        get: function () {
            return "\u540D\u5B57\u662F:" + this.name;
        },
        enumerable: true,
        configurable: true
    });
    Animals.desc = "动物描述";
    return Animals;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs(props) {
        var _this = _super.call(this) || this;
        _this.type = "狗类";
        _this.name = props.name;
        return _this;
    }
    Dogs.prototype.say = function () {
        return "\u6211\u7684\u52A8\u7269\u79CD\u7C7B\u662F:" + this.type;
    };
    return Dogs;
}(Animals));
var ones = new Dogs({ name: "小狗一号" });
// [public, private, protect] | static & readonly
console.log(ones.introduce, ones.say(), ones.age);
// super 是拓展父类constructor super 参数 = 父类参数+子类参数
var Animal = /** @class */ (function () {
    function Animal(level) {
        this.name = "动物";
        this.level = 0;
        this.age = 18;
        this.level = level;
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
    function Dog(level, props) {
        var _this = _super.call(this, level) || this;
        _this.type = "狗类";
        _this.name = props.name;
        return _this;
    }
    Dog.prototype.say = function () {
        return "\u6211\u7684\u52A8\u7269\u79CD\u7C7B\u662F:" + this.type;
    };
    return Dog;
}(Animal));
var one = new Dog(1, { name: "小狗一号" });
// [public, private, protect] | static & readonly
console.log(one.introduce, one.say(), one.age);
// super 是拓展父类constructor super 参数 = 父类参数+子类参数
