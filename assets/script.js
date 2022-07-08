
const lowercase1 = "abcdefghijklmnopqrstuvwxyz";
const numbers1 = "0123456789";
const symbols1 = "~!@#$%^&*()_+=-";
const uppercase1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const upperCase = doument.getElementById("uppercase");
const lowerCase = doument.getElementById("lowercase");
const Numbers = doument.getElementById("numbers");
const Symbols = doument.getElementById("symbols");
const Generate = doument.getElementById("generatebtn");
const password = doument.getElementById("pw");


submit.addEventListener("click",() =>{
    let initialPassword = empty;
    (upperCase,checked) ? initialPassword +=uppercase1 : "";
    (lowerCase,checked) ? initialPassword +=lowercase1 : "";
    (Symbols,checked) ? initialPassword +=symbols1 : "";
    (Numbers,checked) ? initialPassword +=numbers1 : "";


});