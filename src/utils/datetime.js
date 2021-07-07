// Storage for date and time helpers - functions what are used through the app

import moment from 'moment';
import DateFormat from './dateFormat';

/*
 * Returns duration, converted from milliseconds number to user friendly string (x day(s) y hour(s)).
 *
 * @param integer durationMill - duration in milliseconds
 *
 * @return string | undefined
 */
export const relativeDurationDDHH = durationMill => {
  if (durationMill) {
    const durationByMoment = moment.duration(durationMill);
    const durationDays = Math.floor(durationByMoment.asDays());
    const durationHours = durationByMoment.hours();
    const daysString = durationDays > 0 ? `${durationDays} day${durationDays > 1 ? 's' : ''}` : '';
    const hoursString =
      durationHours > 0 ? `${durationHours} hour${durationHours > 1 ? 's' : ''}` : '';

    return `${daysString} ${hoursString}`;
  }

  return undefined;
};

// TODO (@723105526232290, Ivan): Check if the following can be used in other domains:
export const makeRange = (start, end) => {
  const result = [];
  for (let i = start; i < end; i += 1) {
    result.push(i);
  }
  return result;
};

export const disabledHours = (min, max) => {
  const maxHour = 24;
  const hours = makeRange(0, maxHour);
  const minH = min ? moment(min).get('hour') : 0;
  const maxH = max
    ? moment(max)
        .add(1, 'hours')
        .get('hour')
    : maxHour;

  if (minH && maxH) {
    // min-max defined
    hours.splice(minH, maxH - minH);
  } else {
    // either defined only min or max
    hours.splice(minH, maxH);
  }

  return hours;
};

export const disabledMinutes = (min, max, selectedHour) => {
  // simplify type
  const maxMinute = 60;
  const minH = min ? moment(min).get('hour') : 0;
  const maxH = max ? moment(max).get('hour') : 0;
  const minM = min ? moment(min).get('minute') : 0;
  const maxM = max ? moment(max).get('minute') : 0;

  // Disable start of min time
  if (selectedHour === minH) {
    return makeRange(0, minM);
  }
  // Disable end of max time
  if (selectedHour === maxH) {
    return makeRange(maxM, maxMinute);
  }
  // If not in range of hour then disable them all
  if (minH && maxH && (selectedHour < minH || selectedHour > maxH)) {
    return makeRange(0, maxMinute);
  }

  // No limit at all
  if (!min && !max) {
    return [];
  }
  return [];
};

export function getTimestampCalendarFormat(date) {
  const momentDate = DateFormat.getInstance(date);
  return momentDate.calendar({
    sameDay: '[Today]',
    nextDay: '[Tomorrow]',
    lastDay: '[Yesterday]',
    lastWeek: 'LL',
    sameElse: 'LL',
  });
}

export function getTimeZone() {
  // Avoid break line with unsupported browsers e.g, IE
  // Check if Intl API is available
  // If not, server will use a default timeZone
  let timeZone = null;

  if (
    typeof Intl.DateTimeFormat === 'function' &&
    typeof Intl.DateTimeFormat().resolvedOptions === 'function'
  ) {
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  return timeZone;
}
