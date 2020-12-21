// 18.  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, 
//которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

let str18 = "Я пришёл к тебе с приветом, рассказать, что солнце встало...";

function ucStr(str) {
    let strToArr = str.split(" "),
        newStr = "";
    for (let i = 0; i < strToArr.length; i++) {
        newStr += " " + ucFirst(strToArr[i]);
    }
    return newStr;
}
console.log(ucStr(str18));

function ucFirst(word) {
    let firstLetter = word[0].toUpperCase() + word.slice(1);
    return firstLetter;
}

// 19. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

let str19 = 'var_text_hello';

function toCamelCase(str) {
    let arrCamelCase = str.split("_"),
        strCamelCase = arrCamelCase[0];
    for (let i = 1; i < arrCamelCase.length; i++) {
        strCamelCase += ucFirst(arrCamelCase[i]);
    }
    return (strCamelCase);
}
console.log(toCamelCase(str19));

// 20. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

let myArr20 = [15, 4, 59, 24, 11];

function inArray(text, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == text) {
            return true;
        }
    }
    return false;
}
console.log(inArray(23, myArr20));

// 21. Дана строка, например, '123456'. Сделайте из нее '214365'.
let str21 = '1234567891';

function rev(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            let first = str[i],
                second = str[i + 1];
            newStr += second + first;
        }
    }
    return newStr;
}
console.log(rev(str21));

// 22. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.

let myArr22 = [1, 15, 26, 68, 4];

function rec(arr) {
    if (arr.length > 0) {
        console.log(arr[0]);
        arr.shift();
        rec(arr);
    }
}
rec(myArr22);

// 23. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

let num23 = 99999999999999;
let currentSum23 = 0;

function getSum(n) {

    if (n != 0) {
        console.log("Начинаю вычисление");
        let lastNum = n % 10;
        console.log("lastNum: " + lastNum);
        n = Math.floor(n / 10);
        console.log("n: " + n);
        currentSum23 += lastNum;
        console.log("currentSum: " + currentSum23);
        getSum(n);
    }
    if (currentSum23 > 9) {
        console.log("Упс, текущая сумма больше 9!");
        n = currentSum23;
        currentSum23 = 0;
        getSum(n);
    }
    return n;
}
getSum(num23);

// 24. На странице разместить кнопку, при нажатии на которую, квадрат рядом меняет цвет случайным образом.

const btn24 = document.querySelector(".button--task24");
const bigSquare = document.getElementById("bigSquare");
const littleSquare = document.getElementById("littleSquare");
const btnStop = document.getElementById("btnStop");
var timer;
let r, g, b, deg;

btn24.addEventListener("click", function () {
    clearInterval(timer);
    timer = setInterval(function () {
        deg = Math.floor(Math.random() * 360);
        deg++;
       
        r = getColorUp();
        g = getColorUp();
        b = getColorUp();

        littleSquare.style.background = "linear-gradient(" + deg + "deg, rgb(" + r + "," + g + "," + b + "), rgb(" + b + "," + g + "," + r + "))";
    }, 600);
});

function getColorUp() {
   let n = Math.floor(Math.random() * 255);
    n += 5;
    if (n >= 255) {
        n -= 5;
    }
    if (n <= 0) {
        n += 5;
    }
    return n;
}

btnStop.addEventListener("click", function () {
    clearInterval(timer);
});