// 18.  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, 
//которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

let str18 = "Я пришёл к тебе с приветом, рассказать, что солнце встало...";

function ucfirst(word) {
    let firstLetter = word[0].toUpperCase() + word.slice(1);
    return firstLetter;
}

function ucStr(str) {
    let strToArr = str.split(" "),
        newStr = "";
    for (let i = 0; i < strToArr.length; i++) {
        newStr += " " + ucfirst(strToArr[i]);
    }
    return newStr;
}
console.log(ucStr(str18));