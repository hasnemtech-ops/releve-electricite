const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

function creerFenetre() {
  const fenetre = new BrowserWindow({
    width: 480,
    height: 860,
    minWidth: 380,
    minHeight: 640,
    title: 'Relevé Électricité',
    backgroundColor: '#F4F3EE',
    icon: path.join(__dirname, 'assets', 'icone.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  fenetre.setMenuBarVisibility(false);
  fenetre.loadFile(path.join(__dirname, 'assets', 'index.html'));

  // Les liens externes (WhatsApp, wa.me...) s'ouvrent dans le navigateur par défaut
  // de Windows, jamais dans une fenêtre Electron — même principe que sur Android.
  fenetre.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
  fenetre.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file://')) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null); // pas de barre de menu (Fichier/Édition...), inutile ici
  creerFenetre();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) creerFenetre();
});
