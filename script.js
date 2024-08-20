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