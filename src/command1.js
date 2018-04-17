// utils
import { createWebview } from './utils'

export default function(context) {
  let webUI = createWebview(context, {}, 'Another Planet');
  context.document.showMessage("It's alive 🙌")
}
