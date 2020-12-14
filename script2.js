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
    };
return false;
}
console.log(inArray(23, myArr20));