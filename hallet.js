
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

  
// navbar scroll

const header = document.querySelector('.navbar');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling DOWN
    header.classList.add('show');
  } else if (currentScrollY === 0) {
    // Scrolling UP
    header.classList.remove('show');
  }

  lastScrollY = currentScrollY;
});

// refresh from top

// Disables the browser's automatic scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Ensures the window scrolls to top on the load event
window.scrollTo(0, 0);



