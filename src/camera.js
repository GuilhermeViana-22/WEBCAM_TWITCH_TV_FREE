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


// Funções para arrastar a janela
const { BrowserWindow } = require('@electron/remote');

let isDragging = false;
let startX;
let startY;
let startLeft;
let startTop;

const videoContainer = document.querySelector('.video-container');

// Início do arrasto
videoContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    
    const currentWindow = BrowserWindow.getFocusedWindow();
    if (currentWindow) {
        const { x, y } = currentWindow.getBounds();
        startLeft = x;
        startTop = y;
    }
    event.preventDefault();
});

// Movendo a janela enquanto arrasta
document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const currentWindow = BrowserWindow.getFocusedWindow();
        if (currentWindow) {
            const deltaX = event.clientX - startX;
            const deltaY = event.clientY - startY;
            currentWindow.setBounds({
                x: startLeft + deltaX,
                y: startTop + deltaY
            });
        }
    }
});

// Finaliza o arrasto
document.addEventListener('mouseup', () => {
    isDragging = false;
});
