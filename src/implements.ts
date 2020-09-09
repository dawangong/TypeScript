// 接口继承 & 类实现接口
interface Alarm {
    name: string,
    alert?: (str: string) => void;
}

interface Alarmed extends Alarm {
    lightOn?: () => void;
    lightOff?: () => void;
}

class Door {
}

class SecurityDoor extends Door implements Alarmed {

    public name: string = "防盗门";

    alert() {
        console.log('SecurityDoor alert');
    }
}

class Car implements Alarm {

    public name: string = "车子";

    alert() {
        console.log('Car alert');
    }
}

new SecurityDoor().alert();
new Car().alert();

