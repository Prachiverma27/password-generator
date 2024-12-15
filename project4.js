let passwordBox=document.querySelector("#Password");
let btn=document.querySelector("button");
let length=18;

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase="abcdefghijklmnopqrstuvwxyz";
let number="0123456789";
let symbol="`!@#$%^&*()?><,./\{}[]";

let allchars = upperCase+lowerCase+number+symbol;

function createPassword(){
let password="";
password+=upperCase[Math.floor(Math.random()*upperCase.length)];
password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
password+=number[Math.floor(Math.random()*number.length)];
password+=symbol[Math.floor(Math.random()*symbol.length)];


while(password.length<length){
    password+=allchars[Math.floor(Math.random()* allchars.length)];
 
}
passwordBox.value=password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}


