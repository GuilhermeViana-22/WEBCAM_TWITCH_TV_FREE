const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const remote = require('@electron/remote/main');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 400,
        height: 400,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            enableRemoteModule: false
        }
    });

    remote.initialize();
    remote.enable(mainWindow.webContents);

    mainWindow.loadFile('src/index.html');
    
    ipcMain.on('start-drag', () => {
        mainWindow.startDrag();
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
