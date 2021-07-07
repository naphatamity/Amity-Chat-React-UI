/* eslint-disable class-methods-use-this */

// CG | Add New Language | Step 9
// Follow instructions provided in the file

import moment from 'moment';
import { get } from 'lodash';
import 'moment/min/locales';

import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

// import SettingStore from '~/stores/settings/settings';

import LocaleTimeAgo from './locale-time-ago';

/**
 * Display in setting modal to allow user can pick which type of language do they want
 *
 * How to add new locale
 * ---
 * 1. Go to momentjs(https://momentjs.com) site and scroll to `Multiple Locale Support` section you will see all supported language.
 * 2. Try to pick one of them, you will see the result of above change.
 * 3. In the first line it will show locale code, it is the same code with locale field inside `dateLocale` down here.
 * 4. Copy locale code and create a new object like this `{ locale: __locale_from_moment_web_site__, name: __language_name__ }`
 * 5. Add new object in previous step into `dateLocale` (the variable down here) under `WebLocaleKey` key.
 * 6. In the finally it will look like this
 *    { `webLocaleKey`: [ { locale: `momentLocaleKey`, name: `nameOfLanguage` } ] }
 * ---
 * Reference
 * - webLocaleKey: web locale setting refer to localise locale code (example: en, th, de, fr, ... )
 * - momentLocaleKey: locale code from momentjs (example: en-au, en-ca, en-ie, en-il, en-nz, ...)
 * - nameOfLanguage: language name please use same as defined in momentjs site (example: English (Australia), English (Canada), ...)
 */
export const dateLocale = {
  en: [
    { locale: 'en-au', name: 'English (Australia)' },
    { locale: 'en-ca', name: 'English (Canada)' },
    { locale: 'en-ie', name: 'English (Ireland)' },
    { locale: 'en-il', name: 'English (Isarael)' },
    { locale: 'en-nz', name: 'English (New Zealand)' },
    { locale: 'en-SG', name: 'English (Singapore)' },
    { locale: 'en-gb', name: 'English (United Kingdom)' },
    { locale: 'en', name: 'English (United States)' },
  ],
  nl: [
    { locale: 'nl', name: 'Dutch' },
    { locale: 'nl-be', name: 'Dutch (Belgium)' },
  ],
  fr: [
    { locale: 'fr', name: 'French' },
    { locale: 'fr-ca', name: 'French (Canada)' },
    { locale: 'fr-ch', name: 'French (Switzerland)' },
  ],
  it: [
    { locale: 'it', name: 'Italian' },
    { locale: 'it-ch', name: 'Italian (Switzerland)' },
  ],
  de: [
    { locale: 'de', name: 'German' },
    { locale: 'de-at', name: 'German (Austria)' },
    { locale: 'de-ch', name: 'German (Switzerland)' },
  ],
  th: [{ locale: 'th', name: 'Thai' }],
  zh: [
    { locale: 'zh-cn', name: 'Chinese (China)' },
    { locale: 'zh-hk', name: 'Chinese (Hong Kong)' },
    { locale: 'zh-tw', name: 'Chinese (Taiwan)' },
  ],
  ja: [{ locale: 'ja', name: 'Japanese' }],
};

export const TIME_FORMAT = 'LT';

export const TIME_PICKER = 'HH:mm';

function getDateLocale() {
  return 'en';
}

function getWebLocale() {
  return 'en';
}

/**
 * This method will create a dateformat for react-timeago package
 * @param {string} locale  (optional)
 */
export function getLocaleTimeAgo(locale) {
  const currentLocale = locale || getWebLocale();
  const localeFormat = get(LocaleTimeAgo, currentLocale, false);
  if (!localeFormat) return false;
  return buildFormatter(localeFormat);
}

/**
 * Auto create Datetime format by depending on Web setting.
 * This class build on top moment package.
 * site: https://momentjs.com/
 */
class DateFormat {
  /**
   * getInstance()
   * ---
   * DateFormat.getInstance()                      // moment()
   * DateFormat.getInstance('2019-04-09 15:12:00') // moment('2019-04-09 15:12:00')
   * DateFormat.getInstance(1554822720000)         // moment(1554822720000)
   * ---
   * get moment instance with auto load locale setting.
   * @param  {date|int|string|object} props optional
   * @returns {moment}
   */
  getInstance(...props) {
    const locale = getDateLocale();
    moment.locale(locale);
    if (props) return moment(...props);
    return moment;
  }

  /**
   * getDateTimeFormat(instance: moment)
   * ---
   * DateFormat.getDateTimeFormat()           // { SHORT: "L", MEDIUM: "ll", TIME: "dd mmm YYYY", FULL: "LLLL" }
   * DateFormat.getDateTimeFormat(moment())   // { SHORT: "L", MEDIUM: "ll", TIME: "dd mmm YYYY", FULL: "LLLL" }
   * ---
   * Get all supported dateTime format
   * @param {moment} instance optional, leave blank for using internal locale setting
   *
   * @returns {object} { SHORT: "L", MEDIUM: "ll", TIME: "dd mmm YYYY", FULL: "LLLL" }
   */
  getDateTimeFormat(instance) {
    let currentInstance = instance;
    if (!currentInstance) {
      currentInstance = this.getInstance();
    }

    const { L: short, ll: medium, LLLL: full, LT: timeFormat } = get(
      currentInstance,
      '_locale._longDateFormat',
      {},
    );

    return {
      SHORT: short || 'L',
      MEDIUM: medium || 'll',
      TIME: `${short} ${timeFormat}`,
      FULL: full || 'LLLL',
    };
  }

  /**
   * getDate(type: string, dateTime: number|dateTime|string|moment)
   * ---
   * // Current time is 2019-04-09 15:12:00
   * DateFormat.getDate()                               // Tuesday, April 9, 2019 3:22 PM
   * DateFormat.getDate('SHORT')                        // 04/09/19
   * DateFormat.getDate('MEDIUM')                       // Apr 9, 2019
   * DateFormat.getDate('TIME')                         // 04/09/19 3:22 PM
   * DateFormat.getDate('FULL', '2019-04-09 00:00:00')  // Tuesday, April 9, 2019 12:00 AM
   * ---
   * Get datetime string
   * @param {string} type one of this 'SHORT', 'MEDIUM', 'TIME', 'FULL'
   * @param {number|dateTime|string|moment} dateTime optional, leave blank for using current time
   *
   * @returns {string} dateTime string with format
   */
  getDate(type = 'FULL', dateTime = null) {
    const currentInstance = dateTime ? this.getInstance(dateTime) : this.getInstance();
    const formatType = type.toUpperCase();
    const dateFormat = this.getDateTimeFormat(currentInstance);

    if (['SHORT', 'MEDIUM', 'TIME', 'FULL'].includes(formatType)) {
      return currentInstance.format(dateFormat[formatType]);
    }

    return currentInstance.format(dateFormat.FULL);
  }

  /**
   * getTime(dateTime: number|dateTime|string|moment)
   * ---
   * // Current time is 2019-04-09 15:12:00
   * DateFormat.getTime()                       // 3:22 PM
   * DateFormat.getTime('2019-04-09 00:00:00')  // 12:00 AM
   * ---
   * get time string with format
   * @param {number|dateTime|string|moment} dateTime optional, leave blank for using current time
   *
   * @returns {string} time string with format
   */
  getTime(dateTime) {
    return this.getInstance(dateTime).format(TIME_FORMAT);
  }
}

export default new DateFormat();
