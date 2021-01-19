const addBeat = document.querySelector('.looper-add');
const looperBox = document.querySelector('.looper');

let looperAppear = true;

addBeat.addEventListener('click', () => {
    if(looperAppear){
        addBeat.textContent = 'go back';
        looperAppear = !looperAppear;
    } else if(!looperAppear){
        addBeat.textContent = 'add some beat';
        looperAppear = !looperAppear;
    }
    addBeat.classList.remove('pulse')
    looperBox.style.zIndex = 99999;
    looperBox.classList.toggle('appear')
    looperBox.classList.toggle('disappear')
})