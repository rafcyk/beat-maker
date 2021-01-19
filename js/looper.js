const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

const snare = document.querySelector('.snare-audio')
const kick = document.querySelector('.kick-audio')
const hiHat = document.querySelector('.hi-hat-audio')

const looperSounds = [...document.querySelectorAll('.sound')];

const snareSounds = [...document.querySelectorAll('.snare-box .sound')];
const kickSounds = [...document.querySelectorAll('.kick-box .sound')];
const hiHatSounds = [...document.querySelectorAll('.hi-hat-box .sound')];

looperSounds.forEach(sound => {
    sound.addEventListener('click', ()=> {
        sound.classList.toggle('active');
    })
})

let snareLoop;

let maxTempo = 210;
let minTempo = 60;


function playLoop() {
    let tempo = document.querySelector('.tempo-input').value;

    if(tempo >= minTempo && tempo <= maxTempo){
        play.classList.add('disactive-control')
        pause.classList.remove('disactive-control')
    
        let i = 0;
        snareLoop = setInterval(() => {
            //removing styles from sounds
            snareSounds.forEach(sound => {
                if(sound.classList.contains('active-sound')){
                    sound.classList.remove('active-sound');
                }
            });
            kickSounds.forEach(sound => {
                if(sound.classList.contains('active-sound')){
                    sound.classList.remove('active-sound');
                }
            });
            hiHatSounds.forEach(sound => {
                if(sound.classList.contains('active-sound')){
                    sound.classList.remove('active-sound');
                }
            });
    
            //play sound
            if(snareSounds[i].classList.contains('active')){
                snare.play();
            }
            if(kickSounds[i].classList.contains('active')){
                kick.play();
            }
            if(hiHatSounds[i].classList.contains('active')){
                hiHat.play();
            }
    
            snareSounds[i].classList.add('active-sound');
            kickSounds[i].classList.add('active-sound');
            hiHatSounds[i].classList.add('active-sound');
    
            //increment loop
            i++;
    
            if(i >= snareSounds.length){
                i=0;
            }
        }, 60000/tempo);
    } else {
        alert(`Tempo available ${minTempo}-${maxTempo}`)
    }

}

play.addEventListener('click', playLoop)
pause.addEventListener('click',  ()=> {
    play.classList.remove('disactive-control')
    pause.classList.add('disactive-control')
    clearInterval(snareLoop);
    snareSounds.forEach(sound => {
        if(sound.classList.contains('active-sound')){
            sound.classList.remove('active-sound');
        }
    })
    kickSounds.forEach(sound => {
        if(sound.classList.contains('active-sound')){
            sound.classList.remove('active-sound');
        }
    })
    hiHatSounds.forEach(sound => {
        if(sound.classList.contains('active-sound')){
            sound.classList.remove('active-sound');
        }
    })
})