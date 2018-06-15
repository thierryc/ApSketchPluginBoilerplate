import BrowserWindow from 'sketch-module-web-view'

const IDENTIFIER = 'io.anotherplanet.ApReactSketchPluginBoilerplate.webview';

export function createWebview(context, handlers, title) {
  const options = {
    identifier: IDENTIFIER,
    title,
    width: 400,
    height: 700,
    backgroundColor: '#ffffff',
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



/*
function makeTitlebarTransparent() {
  const threadDictionary = NSThread.mainThread().threadDictionary();
  if (!threadDictionary[IDENTIFIER]) { return; }
  const panel = threadDictionary[IDENTIFIER];
  panel.setTitlebarAppearsTransparent(true);
}
*/
