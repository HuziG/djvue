/*
 * @Descripttion: 产品编辑文件
 * @version:
 * @Author: dingjia z
 * @Date: 2020-01-10 11:04:26
 * @LastEditors  : dingjia z
 * @LastEditTime : 2020-01-10 11:09:16
 */

import request from "../services";
import { baseUrl } from "../config/env";

export const getProductDataInfo = () =>
  request({
    url: baseUrl + "/api/",
    method: "post",
    params: {}
  });
