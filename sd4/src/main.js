import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
    const win = new BrowserWindow({
        width: 700,
        height: 600,
        webPreferences:{
            contextIsolation: true,
            nodeIntegration: false
        }
    })

    win.loadFile(path.join(__dirname, "index.html"));
}

function createMenu() {
    const template = [
      {
        label: "File",
        submenu: [{ role: "reload" }, { type: "seperator" }, { role: "quit" }],
      },
      {
        label: "Edit",
        submenu: [
          { role: "undo" },
          { role: "redo" },
          { type: "separator" },
          { role: "cut" },
          { role: "copy" },
          { role: "paste" },
        ],
      },
    ];

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
    createWindow()
    createMenu()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})