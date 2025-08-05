const modal = document.getElementById('modal');
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImage = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.modal-close');


galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const fullSizeSrc = item.getAttribute('data-fullsize-src');
        modalImage.src = fullSizeSrc;
        modal.style.display = 'flex';
    });
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

    
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

    
window.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});
