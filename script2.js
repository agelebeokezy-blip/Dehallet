
// event scroll js

const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right');
const container = document.querySelector('.event-container')

prevBtn.addEventListener('click', () => {
  container.scrollBy({ left: -329, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  container.scrollBy({ left: 329, behavior: 'smooth' });
});

// event container buttons display

container.addEventListener('scroll', () =>{
  
  if (container.scrollLeft==0) {
    prevBtn.style.display = 'none';
  } 
  else {
    prevBtn.style.display = 'block';
  }

    // At the end
  const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  
  if(atEnd){
    nextBtn.style.display='none'
  }
  else{
    nextBtn.style.display="block"
  }
})


// explore button

const explore = document.querySelector(".explore")


explore.addEventListener('click', () =>{
  window.scrollBy({top: window.innerHeight, behavior: "smooth"})
})

// faq

    const button1 = document.querySelector('.fa1');
    const paragraph1 = document.querySelector('.faq .p1');
    const button2 = document.querySelector('.fa2');
    const paragraph2 = document.querySelector('.faq .p2');
    const button3 = document.querySelector('.fa3');
    const paragraph3 = document.querySelector('.faq .p3');
    const button4 = document.querySelector('.fa4');
    const paragraph4 = document.querySelector('.faq .p4');
   

    
    button1.addEventListener('click', () => {
      
      if (paragraph1.style.display === 'block') {
        paragraph1.style.display = 'none'; 
        button1.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph1.style.display = 'block'; 
        button1.style.transform = "rotate(90deg)";
      }
    });

      button2.addEventListener('click', () => {
      
      if (paragraph2.style.display === 'block') {
        paragraph2.style.display = 'none'; 
        button2.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph2.style.display = 'block'; 
        button2.style.transform = "rotate(90deg)";
      }
    });

      button3.addEventListener('click', () => {
      
      if (paragraph3.style.display === 'block') {
        paragraph3.style.display = 'none'; 
        button3.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph3.style.display = 'block'; 
        button3.style.transform = "rotate(90deg)";
      }
    });

      button4.addEventListener('click', () => {
      
      if (paragraph4.style.display === 'block') {
        paragraph4.style.display = 'none'; 
        button4.style.transform = "rotate(0deg)";
      } 
      
      else {
        paragraph4.style.display = 'block'; 
        button4.style.transform = "rotate(90deg)";
      }
    });

      // gallery scroll js

  const backBtn = document.querySelector('.lft-button');
  const fwrdBtn = document.querySelector('.rght-button');
  const containerx = document.querySelector('.flex-img')

  backBtn.addEventListener('click', () => {
    containerx.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  });

  fwrdBtn.addEventListener('click', () => {
    containerx.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  });

  // event container buttons display

  containerx.addEventListener('scroll', () =>{
    
    if (containerx.scrollLeft==0) {
      backBtn.style.display = 'none';
    } 
    else {
      backBtn.style.display = 'block';
    }

      // At the end
    const atEnd = containerx.scrollLeft + containerx.clientWidth >= containerx.scrollWidth;
    
    if(atEnd){
      fwrdBtn.style.display='none'
    }
    else{
      fwrdBtn.style.display="block"
    }
  })

  
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

// page scroll

const hiddenElements = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

});

hiddenElements.forEach((el, index) => {

  el.style.transitionDelay = `${index * 0.1}s`;

  observer.observe(el);

});

