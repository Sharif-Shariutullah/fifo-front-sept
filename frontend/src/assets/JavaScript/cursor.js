const slider = document.querySelector(".right-slider");
const slideTrack = document.querySelector(".right-slide-track");

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;

slider.addEventListener("mousedown", startDrag);
slider.addEventListener("mousemove", drag);
slider.addEventListener("mouseup", endDrag);
slider.addEventListener("mouseleave", endDrag); // End drag if mouse leaves slider area
slider.addEventListener("touchstart", startDrag); // For touch devices
slider.addEventListener("touchmove", drag);
slider.addEventListener("touchend", endDrag);

// Start dragging function
function startDrag(event) {
  isDragging = true;
  startPosition = getPositionX(event);
  slideTrack.style.animationPlayState = "paused"; // Pause the animation while dragging
  slider.style.cursor = "grabbing"; // Change cursor to grabbing
  cancelAnimationFrame(animationID); // Cancel any ongoing animations
}

// Dragging function
function drag(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  currentTranslate = prevTranslate + currentPosition - startPosition;
  slideTrack.style.transform = `translateX(${currentTranslate}px)`;
}

// End dragging function
function endDrag() {
  isDragging = false;
  slider.style.cursor = "grab"; // Revert cursor to grab
  prevTranslate = currentTranslate;
  startAutoScroll(); // Resume the automatic scrolling after dragging ends
}

// Get the current X position
function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

// Function to start automatic scrolling
function startAutoScroll() {
  slideTrack.style.animationPlayState = "running"; // Resume the animation
  slideTrack.style.transform = ""; // Clear the manual transform
  animationID = requestAnimationFrame(() => {
    slideTrack.style.animation = "right-scroll 40s linear infinite"; // Start the animation again
  });
}

// Initial auto scroll start
startAutoScroll();
