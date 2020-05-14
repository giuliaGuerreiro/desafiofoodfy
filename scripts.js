const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const infoModal = document.querySelector('.info-modal');


for (let card of cards) {
    card.addEventListener("click", function () {
        const imageId = card.getAttribute('id');
        modalOverlay.classList.add('active');
        document.querySelector('iframe').src=`./assets/${imageId}`;
    })

}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    document.querySelector('iframe').src="";
})