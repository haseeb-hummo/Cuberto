const cursor = document.querySelector(".customCursor");
const elements = document.querySelectorAll(".elem");
const videos = document.querySelectorAll("video");

function updateCursorPosition(e) {
    const positionX = e.clientX - cursor.offsetWidth / 2;
    const positionY = e.clientY - cursor.offsetHeight / 2;
  
    cursor.style.transform = `translate(${positionX}px, ${positionY}px)`;
  }
  
  document.addEventListener("mousemove", updateCursorPosition);


elements.forEach((element, index) => {
    
    let video = videos[index];

    element.addEventListener("mouseenter", () => {
        video.style.display = "block";
        video.currentTime = 0; // Reset the video playback to the beginning
        cursor.style.display = "none";
    });
    
    element.addEventListener("mousemove", (e) => {
        let video = videos[index];
        const offsetX = e.clientX - element.getBoundingClientRect().left;
        const offsetY = e.clientY - element.getBoundingClientRect().top;

        video.style.transform = `translate(${offsetX - 165}px, ${offsetY - 165}px) scale(1)`;        
    });
    
    element.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        video.style.transform = `scale(0.7)`; 
        video.style.display = "none";
    });
});

gsap.registerPlugin(ScrollTrigger);


gsap.to(".projects", {
    scrollTrigger: {
        trigger: ".fProjects",
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
        pin: true,
        scrub: 1,
    },
    y : "-505%",
    ease : Power1
});


let projects = document.querySelectorAll(".projects");

projects.forEach((project, index) => {
    ScrollTrigger.create({
        trigger: project,
        start: "top top",
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            console.log(progress, index);
        }
    });
});


gsap.to(".images img", {
    scrollTrigger: {
        trigger: ".fProjects",
        start: "top top",
        endTrigger: ".last",
        end: "bottom bottom",
        scrub: 1,
    },
    y: "-505%", // You can adjust the opacity as needed
    ease: Power3, // Use the correct ease function
});