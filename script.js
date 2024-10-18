const popup = document.querySelector("#popup");
cancelButton = document.querySelector("#cancel-button");

document.addEventListener("mouseout",(event) => {
    if(event.relatedTarget === null){
        popup.style.display = "block";
    }
})

cancelButton.addEventListener("click",() =>{
    
})