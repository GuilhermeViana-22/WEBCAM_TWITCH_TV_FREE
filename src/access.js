const video = document.getElementById('webcam');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Erro ao acessar a webcam: ', err);
    });