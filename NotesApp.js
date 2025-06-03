let MainContainer = document.querySelector("#MainContainer")
let NotesContainer = document.querySelector("#NotesContainer")
let Button = document.querySelector("#btn")

Button.addEventListener("click", function() {

    let inputBox = document.createElement("p")
    inputBox.className = "inputBox"
    inputBox.setAttribute("contenteditable", "true")

    let deleteImg = document.createElement("img")
    deleteImg.src = "delete.png"
    deleteImg.className = "delete"

    const moreImg = document.createElement("img")
    moreImg.src = "more.png"
    moreImg.className = "moreicon"

    inputBox.appendChild(deleteImg)
    inputBox.appendChild(moreImg)

    NotesContainer.appendChild(inputBox)   
    inputBox.focus()

    inputBox.addEventListener("input", SaveNotes)

    document.querySelector(".inputBox").addEventListener("input", SaveNotes)    
     
});


// Delete icon.....
NotesContainer.addEventListener("click", function(e) {
    if(e.target.className === "delete" ) {
        e.target.parentElement.remove()
        SaveNotes()
    }
})

function SaveNotes() {
    localStorage.setItem("notes", NotesContainer.innerHTML)
}

function ShowNotes() {
   NotesContainer.innerHTML = localStorage.getItem("notes")
}

// Small delay to ensure DOM is ready before rendering notes.
// Without this,sometimes the text is not shown in the Notes Box.
setTimeout(() => {
  ShowNotes() 
}, 10);

