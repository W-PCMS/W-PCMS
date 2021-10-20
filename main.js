const { app, BrowserWindow } = require('electron')
const { Notification } = require('electron')

// set preview data
const app_version = "0.1.0"
const app_title = "PC Management Program"


function createWindow () {
  const win = new BrowserWindow({
    title : app_title + " " + app_version,
    // icon set
    icon: './icon.png',
    x : 100,
    y : 100,
    minWidth : 1150,
    minHeight : 850,
    maxHeight : 850,
    maxWidth : 1150,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 상단 메뉴 없애기
  win.removeMenu()
  win.loadFile('./src/view/login.html')
  // view openDevTools
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})