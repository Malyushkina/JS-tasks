// 1. Дана строка из цифр. Проверить, что количество цифр - чётное, если это так, сложить цифры первой половины и цифры второй половины. 
//Сравнить их и если полученные числа одинаковы, вывести в консоль "да", в противном случае - "нет".

let str = "159558";
let
    sum = 0,
    sum1 = 0,
    sum2 = 0;
if (str.length % 2 == 0) {
    for (let i = 0; i < str.length / 2; i++) {
        sum1 += +str[i];
    }
    for (let j = str.length / 2; j < str.length; j++) {
        sum2 += +str[j];
    }
    if (sum1 == sum2) {
        console.log("Да");
    } else {
        console.log("Нет");
    }
} else {
    console.log("Число нечётное");
}