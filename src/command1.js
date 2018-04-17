// utils
import { createWebview } from './utils'

export default function(context) {
  let webUI = createWebview(context, {}, 'Free And Willing');
  context.document.showMessage("It's alive 🙌")
}
