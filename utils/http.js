import {config} from "../config/config";
import {promisic} from "./util";

class Http {
  static request({url, data = {}, method = 'GET'}) {
   return promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data: data,
      method: method,
      header: {
        appkey: `${config.appKey}`
      }
    })
  }
}

export {
  Http
}