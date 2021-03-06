class Animals {
    public name: String = "动物";
    static desc: String = "动物描述";
    public readonly age: Number = 18;

    get introduce (): String {
        return `名字是:${this.name}`
    }
}

interface Props {
    name?: String
}


class Dogs extends Animals{

    public readonly type = "狗类";

    constructor(props: Props) {
        super();
        this.name = props.name;
    }

    say(): String {
        return `我的动物种类是:${this.type}`
    }
}

const ones = new Dogs({ name: "小狗一号" });

// [public, private, protect] | static & readonly

console.log(ones.introduce, ones.say(), ones.age);

// super 是拓展父类constructor super 参数 = 父类参数+子类参数

class Animal {
    public name: String = "动物";
    public level: Number = 0;
    static desc: String = "动物描述";
    public readonly age: Number = 18;

    constructor(level) {
        this.level = level;
    }

    get introduce (): String {
        return `名字是:${this.name}`
    }
}

interface Props {
    name?: String
}


class Dog extends Animal{

    public readonly type = "狗类";

    constructor(level, props: Props) {
        super(level);
        this.name = props.name;
    }

    say(): String {
        return `我的动物种类是:${this.type}`
    }
}

const one = new Dog(1, { name: "小狗一号" });

// [public, private, protect] | static & readonly

console.log(one.introduce, one.say(), one.age);

// super 是拓展父类constructor super 参数 = 父类参数+子类参数
