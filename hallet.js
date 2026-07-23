
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
            const video1 = document.querySelectorAll(".v1")
            const video2 = document.querySelectorAll(".v2")
            const video3 = document.querySelectorAll(".v3")

            
                video1.forEach(v1 =>{
                    v1.addEventListener("click", ()=>{

                    if(videoplayer.style.display = "block"){
                        
                        playvideo('videos/orogunfestival.mp4');  
                    }
                    
                    else{
                        playvideo('videos/orogunfestival.mp4');
                        videoplayer.style.display = 'block';
                        videoplayer.requestFullscreen();
                    }
                })
            })



            function playvideo(file){

                videoplayer.src = file;
            }



