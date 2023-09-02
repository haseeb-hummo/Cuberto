const cursor = document.querySelector(".customCursor");
const elements = document.querySelectorAll(".elem");
const videos = document.querySelectorAll("video");

document.addEventListener("mousemove", (e) => {
    const positionX = e.pageX - cursor.offsetWidth / 2;
    const positionY = e.pageY - cursor.offsetHeight / 2;

    cursor.style.transform = `translate(${positionX}px, ${positionY}px)`;
});


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

        video.style.transform = `translate(${offsetX - 122}px, ${offsetY - 115}px) scale(1)`;        
    });
    
    element.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        video.style.transform = `scale(0.5)`; 
        video.style.display = "none";
    });
});