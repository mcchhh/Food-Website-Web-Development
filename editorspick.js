/*------------------------------------------------------------------
    DRAGGABLE IMAGES - javascript
-------------------------------------------------------------------*/
const carousel = document.querySelector(".carousel");

var isDragStart = false, prevPageX, prevScrollLeft; 

const dragStart = (e) => {
    // updating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX; 
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left accroding to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
    var positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false; 
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchStart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchMove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touch", dragStop);

