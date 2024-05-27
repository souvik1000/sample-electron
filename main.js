const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
  });

  const startURL = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
  });

  mainWindow.loadURL(startURL);
}

app.whenReady().then(createMainWindow);
