const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/";

const passbox=document.getElementById("pass-box");
const totalchar=document.getElementById("total-char");
const upperinput=document.getElementById("upper-case");
const lowerinput=document.getElementById("lower-case");
const numberinput=document.getElementById("numbers");
const symbolsinput=document.getElementById("symbols");





const generandom=(dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

const generatepassword=(password="")=>{
    if(upperinput.checked){
        password += generandom(upperSet);
    }
    if(lowerinput.checked){
        password +=  generandom(lowerSet);
    }
    if(numberinput.checked){
        password += generandom(numberSet);
    }
    if(symbolsinput.checked){
        password += generandom(symbolSet);
    }
    if(password.length <  totalchar.value){
        return generatepassword(password);
    }
    passbox.innerText = truncateString(password, totalchar.value);


}
document.getElementById("btn").addEventListener("click",function(){
    generatepassword();
})


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}