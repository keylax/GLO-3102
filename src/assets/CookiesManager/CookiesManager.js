import Cookies from 'js-cookie';

function getCookieName() {
  return 'ubeat_token';
}

export function setTokenValue(token) {
  const cookieName = getCookieName();

  Cookies.set(cookieName, token);
}

export function getTokenValue() {
  const cookieName = getCookieName();

  return Cookies.get(cookieName);
}

export function deleteToken() {
  const cookieName = getCookieName();

  return Cookies.remove(cookieName);
}

