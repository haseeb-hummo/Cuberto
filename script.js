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
        start: "top 0.2", // Start from 0.2
        endTrigger: ".last",
        end: "bottom bottom",
        pin: true,
        scrub: 1,
    },
    y: "-505%",
    ease: Power1,
});

let imgs = document.querySelectorAll("img");

imgs.forEach((image, index) => {
    ScrollTrigger.create({
        trigger: image,
        start: "top 0.2", // Start from 0.2
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            console.log(Math.floor(progress), index);

            // Check when a specific image is in view and change the background color opacity accordingly
            if ( index === 0) {
                document.querySelector(".featured").style.backgroundColor = "rgba(0, 0, 0, 0)"; // Change background color opacity
            } else if ( index === 1) {
                document.querySelector(".featured").style.backgroundColor = "rgba(0, 0, 255, 0.05)"; // Change background color opacity
            } else if ( index === 2) {
                document.querySelector(".featured").style.backgroundColor = "#ffb6b9b4"; // Change background color opacity
            } else if ( index === 3) {
                document.querySelector(".featured").style.backgroundColor = "rgba(255, 45, 171, 0.12)"; // Change background color opacity
            } else if ( index === 4) {
                document.querySelector(".featured").style.backgroundColor = "#D6E8DB"; // Change background color opacity
            } else if (index === 5) {
                document.querySelector(".featured").style.backgroundColor = "rgba(0, 0, 0, 0)"; // Fully transparent background color when all images are completed
            }
        },
    });
});

gsap.to(".images img", {
    scrollTrigger: {
        trigger: ".fProjects",
        start: "top 0.2", // Start from 0.2
        endTrigger: ".last",
        end: "bottom bottom",
        scrub: 1,
    },
    y: "-505%",
    ease: Power3,
});
