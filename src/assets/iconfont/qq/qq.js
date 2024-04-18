Component({
  properties: {
    // icon-locationcity | icon-custom-user | icon-clock-circle-o | icon-logout | icon-edit | icon-tubiaozhizuomoban- | icon-Comment | icon-handbag | icon-cart | icon-notification | icon-search | icon-fontAwesome_star | icon-arrow
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function (color) {
        this.setData({
          isStr: typeof color === 'string',
        })
      },
    },
    size: {
      type: Number,
      value: 18,
      observer: function (size) {
        this.setData({
          svgSize: (size / 750) * qq.getSystemInfoSync().windowWidth,
        })
      },
    },
  },
  data: {
    svgSize: (18 / 750) * qq.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
})
