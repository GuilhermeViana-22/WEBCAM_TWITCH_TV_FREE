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

// Adiciona um ouvinte para o evento mousedown na video-container para arrastar a janela
const { ipcRenderer } = require('electron');

// Obtém a referência ao container de vídeo
const videoContainer = document.querySelector('.video-container');

// Adiciona o evento mousedown para iniciar o arrasto
videoContainer.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        ipcRenderer.send('start-drag');
    }
});
