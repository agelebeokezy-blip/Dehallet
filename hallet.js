
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


// Adds the 'active' class to a link if its href matches the current URL
document.querySelectorAll('nav a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// video player script

            const videoplayer = document.querySelector("#video-player")

            function playvideo(file){

                videoplayer.src = file;
            }



