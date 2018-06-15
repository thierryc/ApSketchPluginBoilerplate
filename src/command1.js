import { createWebview } from './utils'

export default function(context) {
  //let webUI = createWebview(context, {}, 'Another Planet');
  context.document.showMessage("React Sketch Plugin is alive 🙌");
  let webUI = createWebview(context, {}, 'Another Planet');
}
