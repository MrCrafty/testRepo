const popupContainer = document.querySelector('.popup-container');

function showPopup() {
    popupContainer.style.display = 'flex';
}

setTimeout(() => {
    showPopup();
}, 3000);
