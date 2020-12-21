// Задание 1

console.log('Задание №1')
let sheeps = prompt('Введите кол-во овец: ');
let text = "";

for (let i = 1; i <= sheeps; i++) {
    text = text + `${i} овечка...`;
}
console.log(text);

// Задание 2

console.log('Задание №2')
for (let i = 0; i <= 15; ++i) {
    if (i % 2 == 0) {
        console.log(i + ' - четное число')
    } else {
        console.log(i + ' - нечетное число')
    }
}

// Задание 3

console.log('Задание №3')
for (let i = 0; i <= 3; ++i) {
    console.log('|# # # # |')
    console.log('| # # # #|')
}

// Задание 4

console.log('Задание №4')
let c = Number(prompt(`Первое число`));
let d = Number(prompt(`Второе число`));
let f = Number(prompt(`Третье число`));
const mas = [c, d, f]
let array = '';
for(let i = 0; i < mas.length; i++) {
    array += mas[i] + ' ';
}
console.log('Начальный вид:' + ' ' + array);
for(let i = 0; i < mas.length; i++) {
    for(let j = mas.length; j >= i + 1; j--) {
       if(mas[j - 1] > mas[j]) {
           let a = mas[j];
           mas[j] = mas[j - 1];
           mas[j - 1] = a;
       } 
    }
}
array = '';
for(let i = 0; i < mas.length; i++) {
    array += mas[i] + ' ';
}
console.log('Конечный вид:' + ' ' + array);

// Задание 5