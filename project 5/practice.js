const btn=document.querySelector("#addBtn");
const main=document.querySelector("#main");
console.log(btn);
console.log(main);

btn.addEventListener("click",function(){
    // alert("addnotes");
addnotes();
});

const savenotes=()=>{
    const notes=document.querySelectorAll("#notes textarea");
    console.log(notes);
    const data=[];
    notes.forEach((note)=> {
        data.push(note.value);
    }
    )
    localStorage.setItem("notes", JSON.stringify(data));
    // console.log(data);
}
(
    function(){
        const locaslstoragenotes=JSON.parse(localStorage.getItem("notes"));
        console.log(locaslstoragenotes);
    }
)();

const addnotes=()=>{
    const note=document.createElement("div");
    // note.classList.add("notes");
    note.setAttribute("id", "notes");
note.innerHTML= `
<div class="tool">
    <i class=" save fas fa-save"></i>
    <i class=" delet fas fa-trash"></i>
</div>
<textarea></textarea>`;

note.querySelector(".delet").addEventListener("click",function(e) {
    note.remove();
    savenotes();
})
note.querySelector(".save").addEventListener("click",function(e) {
    savenotes();

});
main.append(note);
savenotes();
}
