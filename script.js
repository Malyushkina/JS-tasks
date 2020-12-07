// 1. Дана строка из цифр. Проверить, что количество цифр - чётное, если это так, сложить цифры первой половины и цифры второй половины. 
//Сравнить их и если полученные числа одинаковы, вывести в консоль "да", в противном случае - "нет".

let str = "159558";
let sum = 0,
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

// 2. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
};
for (let key in obj) {
    console.log(key + " - зарплата " + obj[key] + " долларов.");
}

// 3. С помощью цикла for in выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

let par = document.querySelector(".day-of-week");
let day = new Date().getDay();
let dayOfWeek = {
    0: "Воскресенье",
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница",
    6: "Суббота"
};
for (let key in dayOfWeek) {

    if (key == day) {
        par.innerHTML += "<i>" + dayOfWeek[key] + "</i>" + "<br>";
    } else {
        par.innerHTML += dayOfWeek[key] + "<br>";
    }
}

// 4. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
//Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let n = 1000;

for (let i = 1; i < 100; i++) {
    if ((n / 2) > 50) {
        n = n / 2;
    } else {
        num = i;
        console.log(n, num);
        break;
    }
}
// 5.  Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr5 = [4, 2, 5, 19, 13, 0, 10];
let currentSum = 0,
    sqrtSum;

for (let i = 0; i < arr5.length; i++) {
    currentSum += Math.pow(arr5[i], 3);
}
sqrtSum = Math.sqrt(currentSum);
console.log(sqrtSum);