const button = document.querySelector("button");
const note = document.querySelector("textarea");
const bgColor = document.querySelector("#bg-color");
const textColor = document.querySelector("#txt-color");
const  rightDiv = document.querySelector(".right");
const allNotes = document.querySelector(".all-notes");


button.addEventListener('click' , createStickyNote);


function createStickyNote(){
    // console.log("aa gya")
    const text = note.value;   // it takes the value from textarea
    if(text.length === 0){
        return;
    }
    const stickyNote = document.createElement("div");  // creating blank div
    stickyNote.innerHTML=text;   // putted textarea valve into blank div  <div></div>
    stickyNote.classList.add("note");  // <div class="note"></div>


    const cross = document.createElement("span");  // <span></span>

    cross.addEventListener('click' , removeNote); // function call to remove the note

    cross.innerHTML = "&times";  
    cross.classList.add("close"); 
    stickyNote.append(cross);  


    stickyNote.style.backgroundColor = bgColor.value;
    stickyNote.style.color = textColor.value;

    allNotes.append(stickyNote); 


    note.value = "";
}



function removeNote(evt){
    evt.target.parentElement.remove();
}