const panels = document.querySelectorAll(".panel");

panels.forEach(panel =>{
    panel.addEventListener("click", () =>{

        removeAktive();
        panel.classList.add("active");
    })
})

function removeAktive(){
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}