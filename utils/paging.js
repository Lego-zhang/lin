import {Http} from "./http";
import boolean from "../miniprogram_npm/lin-ui/common/async-validator/validator/boolean";

class Paging {
  /*
 * @url 路径
 * @start 第几页
 * @count 多少条
 * */
  // 不关心细节
  // 是以实例化还是静态方法提供给调用方
  // 要保存状态，使用实例化
  // new Paging 保存这个状态


  req;

  count;

  start;

  locker = false;

  url;

  moreData = true;

  accumulator = [];

  constructor(req, count = 10, start = 0) {
    this.start = start;
    this.count = count;
    this.req = req;
    this.url = req.url

  }

  async getMoreData() {
    // 生成器 Generator
    // 数据锁 getLocker
    // releaseLocker
    // 只有锁打开才能进行请求

    if (!this.moreData) {
      return
    }
    if (!this._getLocker()) {
      return
    }
    const data = await this._actualGetData();
    this._releaseLocker();
    return data
  }

  // 发送请求
  async _actualGetData() {
    const req = this._getCurrentReq();
    let paging = await Http.request(req);
    if (!paging) {
      return null
    }

    /*
    * @empty 此次请求一条数据也没有
    * @items 当前第几页的数据
    * @moreData 多少条
    * @accumulator 所有请求数据的累加
    * */

    if (paging.total === 0) {
      return {
        empty: true,
        items: [],
        moreData: false,
        accumulator: []
      }
    }

    this.moreData = Paging._moreData(paging.total_page, paging.page)

    if (this.moreData) {
      this.start += this.count
    }
    this._accumulate(paging.items);
    return {
      empty: false,
      items: paging.items,
      moreData: this.moreData,
      accumulator: this.accumulator
    }

    // return {
    //   empty: boolean,
    //   items: [],
    //   moreData: boolean,
    //   accumulator: []
    // }
  }

  _accumulate(items) {
    this.accumulator = this.accumulator.concat(items)
  }

  static _moreData(totalPage, pageNum) {
    return pageNum < totalPage - 1
  }

  _getCurrentReq() {
    let url = this.url
    const params = `start=${this.start}&count=${this.count}`
    // url = 'v1/spu/latest' + '?' + params
    // url = 'v1/spu/latest?other=abc' + '&' + params

    if (url.includes('?')) {
      url += '&' + params
    } else {
      url += '?' + params
    }

    this.req.url = url
    return this.req

  }

  _getLocker() {
    // this.locker = true 表示锁已锁住
    if (this.locker) {
      return false
    }
    this.locker = true
    return true
  }

  _releaseLocker() {
    this.locker = false
  }
}

export {
  Paging
}
