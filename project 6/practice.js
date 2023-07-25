console.log("practice js");
const item=document.querySelector("#item")
const todobox=document.querySelector("#todobox");
console.log(item);
console.log(todobox);
item.addEventListener("keyup",function(e){
    if(e.key=="Enter"){
        addtodo(this.value);
        this.value="";
    }
    // alert("hello");

})
const addtodo=(item)=>{
    const element=document.createElement("li");
    element.innerHTML=` 
    ${item}
        <i class=" save fa-solid fa-x"></i>
`
element.addEventListener("click",function(e) {
    // this.classList.toggle("done");

})
element.querySelector("i").addEventListener("click",function(e) {
    element.remove();

})

    todobox.append(element);

}