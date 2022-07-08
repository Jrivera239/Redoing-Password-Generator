// Elements and IDs//
const lowercase1 = "abcdefghijklmnopqrstuvwxyz";
const numbers1 = "0123456789";
const symbols1 = "~!@#$%^&*()_+=-";
const uppercase1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Length = document.getElementById("length")
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowercase");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");
const Generate = document.getElementById("generatebtn");
const password = document.getElementById("pw");
const empty = "";

//connecting checkbox function//
generatebtn.addEventListener("click",() => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword +=uppercase1 :"";
    (lowerCase.checked) ? initialPassword +=lowercase1 :"";
    (Symbols.checked) ? initialPassword +=symbols1 :"";
    (Numbers.checked) ? initialPassword +=numbers1 :"";

    password.value = generatePassword(Length.value,initialPassword)
});
//loop through initial password//
function generatePassword(length, initialPassword){
    let pass = ""
    for(let i = 0; i < length; i ++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return pass;
}