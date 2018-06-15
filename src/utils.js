import BrowserWindow from 'sketch-module-web-view'

const IDENTIFIER = 'io.anotherplanet.ApReactSketchPluginBoilerplate.webview';

export function createWebview(title = '', backgroundColor = '#ffffff', width = 400, height = 300) {
  const options = {
    identifier: IDENTIFIER,
    title,
    width,
    height,
    backgroundColor,
    titleBarStyle: 'default',
    alwaysOnTop: 'floating',
    /*
    titleBarStyle: 'hidden',
    titleBarStyle: 'hiddenInset'
    blurredBackground: false,
    onlyShowCloseButton: false,
    hideTitleBar: false,
    shouldKeepAround: true,
    resizable: false,
    handlers,
    */
  }

  const browserWindow = new BrowserWindow(options)
  browserWindow.loadURL(require('../webViewUI/index.html'))
  browserWindow._panel.setTitlebarAppearsTransparent(true)
  browserWindow._panel.standardWindowButton(NSWindowMiniaturizeButton).setHidden(true)
  browserWindow._panel.standardWindowButton(NSWindowZoomButton).setHidden(true)
  return browserWindow;
}
