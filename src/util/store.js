export function setSession(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSession(key) {
  return JSON.parse(sessionStorage.getItem(key)) || null;
}

export function removeSession(key) {
  sessionStorage.removeItem(key);
}

export function setLocal(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getLocal(key) {
  return JSON.parse(sessionStorage.getItem(key)) || null;
}

export function removeLocal(key) {
  sessionStorage.removeItem(key);
}
