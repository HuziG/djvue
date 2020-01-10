/*
 * @Descripttion: 用户api
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-10 17:31:47
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 18:20:18
 */
import request from "../services";
import { baseUrl } from "../config/env";

export const UserLand = (admin_name, admin_pass) =>
  request({
    method: "post",
    url: baseUrl + "/admin/index/login",
    data: {
      admin_name,
      admin_pass
    }
  });

//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
