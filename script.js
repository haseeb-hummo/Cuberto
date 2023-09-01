const cursor = document.querySelector(".customCursor");

document.addEventListener("mousemove", (e) => {
    const positionX = e.pageX - cursor.offsetWidth / 2;
    const positionY = e.pageY - cursor.offsetHeight / 2;

    cursor.style.transform = `translate(${positionX}px, ${positionY}px)`;

});

// hoverElements.forEach( (element , index) => {

//     element.addEventListener("mouseover" , () => {
//         videoElement.src = videoSrc[index];
//         videoElement.style.display = "block";
//         cursor.style.height = "125px";
//         cursor.style.width = "125px";
//         cursor.style.backgroundImage = `url(${videoSrc[0]})`
//     })
    
//     element.addEventListener("mouseout" , () => {
//         cursor.style.height = "10px";
//         cursor.style.width = "10px";
//         cursor.style.backgroundImage = `none`
//     })

// })



// hoverElements.forEach((element, index) => {
    
//     element.addEventListener("mouseenter", () => {
//         videoElement.src = videoSrc[index];
//         videoElement.style.display = "block";
//         videoElement.style.height = "125px";
//         videoElement.style.width = "125px";
//     });


//     element.addEventListener("mouseleave", () => {
//         videoElement.style.display = "none";
//     });
// });
