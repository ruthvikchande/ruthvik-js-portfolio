console.log("hello");
const enddate="19 september 2023 12:00 AM";
document.getElementById("enddate").innerHTML=enddate;
const inputs=document.querySelectorAll("input");

const clock=()=>{
    const end=new Date(enddate);
    const now=new Date();
    const diff= (end-now) / 1000;
    if(diff<0) return ;
    inputs[0].value=Math.abs(Math.floor(diff / 3600  / 24));
    inputs[1].value=Math.abs(Math.floor(diff / 3600) % 24);
    inputs[2].value=Math.abs(Math.floor(diff / 60) % 60);
    inputs[3].value=Math.abs(Math.floor(diff % 60));
    //convert into days
    
}
setInterval(() => {
    clock();
 
}, 1000);

//1days=24hours
//1hr=60minutes
//1sec=3600
