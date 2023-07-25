const addbtn=document.querySelector("#addBtn");
const main=document.querySelector("#main");

addbtn.addEventListener("click",function(){
addnote();
})
const savenotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    console.log(notes);
    const data=[];
    notes.forEach(
        (note)=>{
            data.push(note.value);
        }
    );
    console.log(data);
}


const addnote=()=>{
    const note =document.createElement("div");
    note.classList.add("notes");
    note.innerHTML = `
    <div class="tool">
        <i id="save" class=" save fas fa-save"></i>
        <i class=" trace fas fa-trash"></i>
    </div>
    <textarea></textarea>
</div>`;

note.querySelector(".trace").addEventListener("click",function() {
    note.remove();
    // alert("remove me");
});
note.querySelector(".save").addEventListener("click",function() {
    savenotes();
});
main.appendChild(note);
}