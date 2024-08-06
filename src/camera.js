// camera.js

const videoElement = document.getElementById('videoElement');

// Solicita acesso à webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        videoElement.srcObject = stream;
    })
    .catch(error => {
        console.error('Erro ao acessar a webcam:', error);
    });

// Adiciona um ouvinte para o evento mousedown para arrastar a janela
const { ipcRenderer } = require('electron');

document.body.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        ipcRenderer.send('start-drag');
    }
});
