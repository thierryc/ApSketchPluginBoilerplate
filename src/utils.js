/* eslint-disable no-undef */
import WebUI from 'sketch-module-web-view';
import {isWebviewPresent, sendToWebview} from 'sketch-module-web-view/remote';

const IDENTIFIER = 'io.anoterplanet.ap1.webview';

export function createWebview(context, handlers, title) {
  const options = {
    identifier: IDENTIFIER,
    x: 0,
    y: 0,
    width: 400,
    height: 700,
    /*
    // background: NSColor.blackColor(), //  default is white
    // [NSColor colorWithCalibratedRed:(r/255.0f) green:(g/255.0f) blue:(b/255.0f) alpha:1.0]
    // background: getNSColor(0.156862745098039, 0.176470588235294, 0.27843137254902, 1.0), // 40, 45, 71
    */
    blurredBackground: false,
    onlyShowCloseButton: false,
    title,
    hideTitleBar: false,
    shouldKeepAround: true,
    resizable: false,
    handlers,
  };

  const webUI = new WebUI(context, require('../webViewUI/index.html'), options); // eslint-disable-line global-require
  makeTitlebarTransparent(); // eslint-disable-line no-use-before-define
  return webUI;
}

export function dispatchToWebview(action, payload, origin) {
  if (!isWebviewPresent(IDENTIFIER)) { return false; }
  const data = JSON.stringify({action, payload, origin});
  sendToWebview(
    IDENTIFIER,
    `sketchBridge(${data});`,
  );
  return true;
}

function makeTitlebarTransparent() {
  const threadDictionary = NSThread.mainThread().threadDictionary();
  if (!threadDictionary[IDENTIFIER]) { return; }
  const panel = threadDictionary[IDENTIFIER];
  panel.setTitlebarAppearsTransparent(true);
}

/*

function getNSColor(red, green, blue, alpha) {
  return NSColor.colorWithDeviceRed_green_blue_alpha(
    red,
    green,
    blue,
    alpha
  );
}

*/
