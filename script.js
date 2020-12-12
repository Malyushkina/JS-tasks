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

// 6. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.

let date6 = "2025-12-31";
let arr6 = date6.split("-");
let newDate = arr6[2] + "/" + arr6[1] + "/" + arr6[0];
console.log(newDate);

//7. Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
//То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
//Если число не делится - выведите 'false', а если делится - выведите 'true'.

let number7 = 32,
    flag = false;
for (let i = 2; i < number7; i++) {
    if (number7 % i == 0) {
        flag = true;
        break;
    }
}
console.log(flag);

// 8. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr8 = [1, 5, 2, 6, 8, 8, 6, 8];
let flag8 = hasNumber(arr8);

function hasNumber(myArr) {
    let currentNum = myArr[0];
    for (let i = 1; i < myArr.length; i++) {
        if (myArr[i] == currentNum) {
            return true;
        } else {
            currentNum = myArr[i];
        }
    }
    return false;
}
if (flag8 == true) {
    console.log("Да");
} else {
    console.log("Нет");
}

// 9.  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
// Если отрицательное - пусть функция вернет true, а если нет - false.

let number9 = -10;

function isPositive(n) {
    return n >= 0;
}
let result9 = isPositive(number9);
console.log(result9);

//10. Нарисуйте в браузере шахматную доску произвольного размера (квадратную) с помощью "х" и "0".

let сhessBoard = document.querySelector(".сhess-board"),
    inputChessRange = document.querySelector(".chess-range");


inputChessRange.addEventListener("input", function () {
    сhessBoard.innerHTML = "";
    let chessRange = inputChessRange.value;
    for (let i = 0; i < chessRange; i++) {
        let str = "";
        if (i % 2 == 0) {
            for (let j = 0; j < chessRange; j++) {
                if (j % 2 == 0) {
                    str += " x";
                } else {
                    str += " 0";
                }
            }
        } else {
            for (let j = 0; j < chessRange; j++) {
                if (j % 2 != 0) {
                    str += " x";
                } else {
                    str += " 0";
                }
            }

        }

        сhessBoard.innerHTML += str + "<br>";
    }
});

// 11. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение,
// которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrayFill(elem, num) {
    let myArr = [];
    for (let i = 0; i < num; i++) {
        myArr.push(elem);
    }
    return myArr;
}
console.log(arrayFill(5, 7));

// 12. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
arr12 = [12, 24, "gfgf"];

function arrayReverse(arr) {
    let reverseArr = [];
    arr.forEach(element => {
        reverseArr.unshift(element);
    });
    return reverseArr;
}
arr12 = arrayReverse(arr12);
console.log(arr12);

// 13. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.  

let arr13 = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8],
        [12, 18],
        ["1", "10"]
    ]
];
let sum13 = 0;

function sumElements(arr) {
    for (i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            for (let k = 0; k < arr[i][j].length; k++) {
                sum13 += +arr[i][j][k];
            }
        }
    }
    return sum13;
}
console.log(sumElements(arr13));

// 14. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum(num) {
    let sum14 = 0;
    num += "";
    for (i = 0; i < num.length; i++) {
        sum14 += +num[i];
    }
    return sum14;
}
console.log(getDigitsSum(585));

// 15. Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

let unhappyYears = 0;

function years(firstYear, lastYear) {
    let currentYear = 0;
    for (let i = firstYear; i <= lastYear; i++) {
        currentYear = getDigitsSum(i);
        if (currentYear == 13) {
            unhappyYears++;
        }
    }
    return unhappyYears;
}
console.log(years(1, 2020));

// 16. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.

let arr16 = [22, 15, 898, 16, 27, 31, 5];

function getEnenNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(getEnenNumber(arr16));

// 17. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }return divisors;
}
console.log(getDivisors(78));