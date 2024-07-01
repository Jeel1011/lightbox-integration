
document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll(".gallery__thumbnail");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox__close");
    const prevBtn = document.querySelector(".lightbox__prev-button");
    const nextBtn = document.querySelector(".lightbox__next-button");
    let currentIndex = 0;

    // Initially hide the lightbox
    lightbox.style.display = "none";

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            currentIndex = index;
            const imgSrc = this.querySelector("img").getAttribute("src");
            lightboxImage.setAttribute("src", imgSrc);
            lightbox.style.display = "flex"; // Show lightbox only when an image is clicked
        });
    });

    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === this) {
            lightbox.style.display = "none";
        }
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        const imgSrc = thumbnails[currentIndex].querySelector("img").getAttribute("src");
        lightboxImage.setAttribute("src", imgSrc);
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        const imgSrc = thumbnails[currentIndex].querySelector("img").getAttribute("src");
        lightboxImage.setAttribute("src", imgSrc);
    });
});
