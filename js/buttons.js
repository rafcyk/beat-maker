const addBeat = document.querySelector('.looper-add');
const looperBox = document.querySelector('.looper');

addBeat.addEventListener('click', () => {
    looperBox.classList.toggle('active-looper')
})