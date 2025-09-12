
window.onload = function() {
    const gallery = document.querySelector('.gallery-container');
    let scrollAmount = 0;
    const imageHeight = 250; // match your .gallery-image height
    const totalImages = gallery.querySelectorAll('.gallery-image').length;
    const maxScroll = imageHeight * (totalImages - 1);
    let direction = 1; // 1 for down, -1 for up

    function scrollGallery() {
        scrollAmount += 3 * direction; // pixels per frame, adjust for speed
        if (scrollAmount > maxScroll) {
            direction = -1; // loop back to start
        }
        if (scrollAmount < 0) {
          direction = 1;
        }
        gallery.style.transform = `translateY(-${scrollAmount}px)`;
        requestAnimationFrame(scrollGallery);
    }

    scrollGallery();
};