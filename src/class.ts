class Animal {
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


class Dog extends Animal{

    public readonly type = "狗类";

    constructor(props: Props) {
      super();
      this.name = props.name;
    }

    say(): String {
        return `我的动物种类是:${this.type}`
    }
}

const one = new Dog({ name: "小狗一号" });

// [public, private, protect] | static & readonly

console.log(one.introduce, one.say(), one.age);

// super 是拓展父类constructor super 参数 = 父类参数+子类参数
