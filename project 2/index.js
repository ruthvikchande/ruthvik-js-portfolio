console.log("hello");
const getcolor=()=>{
    //hex code
    const randomnumbet=Math.floor(Math.random() * 16777215 );
    const randomcode="#"+randomnumbet.toString(16);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerHTML=randomcode;
    // console.log(randomnumbet);
    // console.log(randomcode);
    navigator.clipboard.writeText(randomcode);

}
document.getElementById('btn').addEventListener('click',getcolor);
getcolor();