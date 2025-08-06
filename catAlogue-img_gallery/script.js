const modal = document.getElementById('modal');
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImage = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.modal-close');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = -1

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const fullSizeSrc = item.getAttribute('data-fullsize-src');
        modalImage.src = fullSizeSrc;
        modal.style.display = 'flex';
        currentIndex = index;
    });
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImage.src = "";
});

    
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalImage.src = "";
    }
});

    
window.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex') {
        if (event.key === "Escape") {
            modal.style.display = 'none';
            modalImage.src = "";
        }
        if (event.key === "ArrowLeft") showPrev();
        if (event.key === "ArrowRight") showNext();
    }
});

function showNext() {
    if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    const nextSrc = galleryItems[currentIndex].getAttribute('data-fullsize-src');
    modalImage.src = nextSrc;
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = galleryItems.length - 1; 
    }
    const prevSrc = galleryItems[currentIndex].getAttribute('data-fullsize-src');
    modalImage.src = prevSrc;
}

leftArrow.addEventListener('click', showPrev);
rightArrow.addEventListener('click', showNext);