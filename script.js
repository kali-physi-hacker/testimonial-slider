const prevButton = document.querySelector("#prev-icon");
const nextButton = document.querySelector("#next-icon");

let activeItem = 0
const sliderItems = document.querySelectorAll(".slider-item")

const nextSliderItem = () => {
    console.log("Next: ", sliderItems.length, activeItem)
    if (sliderItems.length - 1 > activeItem) {
        // sliderItems[activeItem].style.transform = "translateX(100%)";
        sliderItems[activeItem].classList.remove("active");
        sliderItems[activeItem+1].classList.add("active");
        activeItem += 1;
    }
}

const prevSliderItem = () => {
    console.log(sliderItems.length, activeItem)
    if (activeItem > 0) {
        sliderItems[activeItem].classList.remove("active");
        sliderItems[activeItem - 1].classList.add("active");
        activeItem -= 1;
    }
}

prevButton.addEventListener("click", prevSliderItem);
nextButton.addEventListener("click", nextSliderItem);

console.log("Works");
