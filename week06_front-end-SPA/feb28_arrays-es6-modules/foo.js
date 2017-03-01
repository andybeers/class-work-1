console.log('BEFORE', add(1, 1));

export function add(x, y) {
    return x + y;
}

export default { name: 'hello' };

export let bar = 'BAR';

export function changeBar(value) {
    bar = value;
}