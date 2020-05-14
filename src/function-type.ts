function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2);

function add(a: number | string, b: number | string) {
    return '';
}

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName1(animal: Cat | Fish) {
    return animal.name;
}

function getName2(animal: Cat | Fish) {
    (animal as Fish).swim()
}
