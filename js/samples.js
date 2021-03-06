const samples = [
                './samples/1.mp3',
                './samples/2.mp3',
                './samples/3.mp3',
                './samples/4.mp3',
                './samples/5.mp3',
                './samples/6.mp3',
                './samples/7.mp3',
                './samples/8.mp3',
                './samples/9.mp3',
                './samples/10.mp3',
                './samples/11.mp3',
                './samples/12.mp3',
                './samples/13.mp3',
                './samples/14.mp3',
                './samples/15.mp3',
                './samples/16.mp3',
                './samples/17.mp3',
                './samples/18.mp3',
                './samples/19.mp3',
                './samples/20.mp3',
                ]

const samplesElements = [];

const samplesBox = document.querySelector('.samples');

for(let i = 0; i < samples.length; i++){
    const sample = document.createElement('audio');
    sample.src = samples[i];
    samplesBox.appendChild(sample);
    samplesElements.push(sample);
}

wrapper.addEventListener('click', () => {
    samplesElements[Math.floor(Math.random() * samplesElements.length)].play();
})