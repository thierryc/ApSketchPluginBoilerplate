import { createWebview } from './utils'

export default function(context) {
  let browserWindow = createWebview('Another Planet');
  browserWindow.webContents.on('showMessage', function(s) {
    context.document.showMessage(`Say: ${s}`);
  })
  context.document.showMessage("React Sketch Plugin is alive 🙌");
}
