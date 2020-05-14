type EventNames = 'click' | 'scroll' | 'mousemove';

// 指定了字符串EventNames 只能取三种字符串中的一种
const add = (event: EventNames): string => event;

add('click');
