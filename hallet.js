
// HOMEPAGE JS


const sidemenu = document.querySelectorAll(".sidemenu")
const togglebtn = document.querySelectorAll(".fa-bars")
const overlay = document.querySelectorAll('.overlay');

togglebtn.forEach(btn =>btn.addEventListener("click", (event) => {
        event.stopPropagation()
        sidemenu.forEach(sidemenu => {
        sidemenu.classList.toggle('active');
        sidemenu.addEventListener("click", (event)=>{
            event.stopPropagation()

        })  
    
    });

    overlay.forEach(over => {
        over.classList.toggle('active');
    });

}))


document.addEventListener("click", () =>{
    sidemenu.forEach(sidemenu => {
        sidemenu.classList.remove('active')
        

        }) 
        overlay.forEach(over => {
        over.classList.remove('active');
    });

})