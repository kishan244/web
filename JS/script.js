const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevslide");
const nextBtn = document.querySelector(".nextslide");

let slideIndex = 0;

// Initially display the first slide
updateSliderPosition();

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {
    slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1; // Move to previous slide
    updateSliderPosition();
}

function nextSlide() {
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1; // Move to next slide
    updateSliderPosition();
}

function updateSliderPosition() {
    // Move the entire slider container to display the current slide
    slider.style.transform = `translateX(-${slideIndex * 100}%)`; 
    console.log("Current slide index:", slideIndex);
}

function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none'
}