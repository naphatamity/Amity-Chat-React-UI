// CG | Add New Language | Step 8
// Follow instructions provided in the file.

import fr from 'react-timeago/lib/language-strings/fr';
import de from 'react-timeago/lib/language-strings/de';
import nl from 'react-timeago/lib/language-strings/nl';
import th from 'react-timeago/lib/language-strings/th';
import ja from 'react-timeago/lib/language-strings/ja';
import it from 'react-timeago/lib/language-strings/it';
import zhCN from 'react-timeago/lib/language-strings/zh-CN';
import zhTW from 'react-timeago/lib/language-strings/zh-TW';

/**
 * Each key will match with moment's locale key (https://momentjs.com/)
 *
 * for more information about how to use please go to this site
 * https://www.npmjs.com/package/react-timeago
 *
 * if you want to install a new language please take a look
 * in `node_modules/react-timeago/lib/language-strings` instead.
 * bcs there is no any information about supported locale in their website :(
 */
const localeTimeAgo = {
  fr,
  de,
  nl,
  th,
  ja,
  it,
  zh: zhCN,
  'zh-cn': zhCN,
  'zh-tw': zhTW,
  'zh-hk': zhTW,
};

export default localeTimeAgo;
