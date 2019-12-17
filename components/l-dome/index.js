// components/l-dome/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },
  attached(){
    this.oo()
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    oo(){
      console.log(this.data.data)
    }
  }
})
