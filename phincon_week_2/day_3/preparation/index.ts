let message: string | number = "Hello World";
let isDone: boolean = false;
let age: number = 25;
let userName: string = "Alice";

let list: string[] | number[] = ['test', 1];
let tuple: [[string], [number]] = [['test'], [2]];

enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
function add(x: number, y: number): number {
    return x + y;
}

let result = add(5, 10);
