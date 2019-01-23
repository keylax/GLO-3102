import moment from 'moment';

export default function millisToMinutesAndSeconds(millis) {
  const time = moment.duration(millis);
  const hours = time.hours();
  let minutes = time.minutes();
  let seconds = time.seconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (hours > 0) {
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
