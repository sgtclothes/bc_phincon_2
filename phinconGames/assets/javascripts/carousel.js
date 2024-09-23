const track = document.querySelector(".carousel-track");
const btnLeft = document.querySelector(".carousel-button.left");
const btnRight = document.querySelector(".carousel-button.right");

btnLeft.addEventListener("click", () => {
    track.scrollBy({
        left: -track.clientWidth,
        behavior: "smooth",
    });
});

btnRight.addEventListener("click", () => {
    track.scrollBy({
        left: track.clientWidth,
        behavior: "smooth",
    });
});
