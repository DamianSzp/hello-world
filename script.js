// JavaScript for smooth page transitions
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        if (this.href !== window.location.href) {
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        }
    });
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        document.body.classList.remove('fade-out');
    }
});

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Attach click events to all images in the gallery
document.querySelectorAll('.design-item img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

// Optional: Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});