/*
 * @Descripttion:
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-10 18:07:59
 * @LastEditors: dingjia z
 * @LastEditTime: 2020-01-10 18:08:19
 */
// 序列化
export const serialize = data => {
  let list = [];
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`);
  });
  return list.join("&");
};
