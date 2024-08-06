// preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    startDrag: () => ipcRenderer.send('start-drag')
});
