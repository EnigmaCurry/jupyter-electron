const {app, webFrame, BrowserWindow} = require ('electron');

let win;

app.on('ready', _ => {
  win = new BrowserWindow({
    webPreferences: {
      zoomFactor: parseFloat(process.env.JUPYTER_ELECTRON_ZOOM) || 1.0,
      nodeIntegration: false
    }
  });
  win.setMenu(null);
  win.loadURL(process.env.JUPYTER_ELECTRON_URL || "https://localhost:10000");
  //win.webContents.setZoomFactor(0.4);
  console.log(app.getPath("userData"));
});
