const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    imgs.forEach(img => img.style.display = "none");
    imgs[n].style.display = "block";
}

if (imgs.length > 0) {
    changeSlide();

    prev_btn.addEventListener("click", () => {
        n = (n > 0) ? n - 1 : imgs.length - 1;
        changeSlide();
    });

    next_btn.addEventListener("click", () => {
        n = (n < imgs.length - 1) ? n + 1 : 0;
        changeSlide();
    });
}

// Optional: Horizontal scroll for product rows
const scrollContainer = document.querySelectorAll(".products");
scrollContainer.forEach(item => {
    item.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
});
