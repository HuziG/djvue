/*
 * @Descripttion:
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-06 13:06:55
 * @LastEditors: dingjia z
 * @LastEditTime: 2020-01-10 20:46:35
 */
import Cookies from "js-cookie";
const TokenKey = "token";
var inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: inFifteenMinutes });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
