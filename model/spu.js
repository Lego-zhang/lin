import {Http} from "../utils/http";

class Spu {
  static async getLatest() {
    Http.request(``)
  }
}

export {
  Spu
}
/*
* 分页
* 1. 一条数据也没有 空
* 2. 最后一页，没有跟多的数据
* 3. 累加 100 重新渲染页面
* 4. 非分页数据：A.正在加载 B.空
*    分页数据 A.正在加载 B.加载完成 C.没有更多数据了
* 5. 上滑页面处理 加载 避免用户重复发请求
* 6. 按钮 防抖 截流
*     禁用按钮 倒计时 loading redis 数据锁
*/