/**
 * @author: zhanghuan
 * @create: 2017/9/18
 * @describe: cookie插件
 */
"use strict";
var Cookie = {

  set: function (name, value, daysOrOptions) {
    var opts = daysOrOptions;
    if(Number.isInteger(daysOrOptions)) {
      opts = {expires: daysOrOptions};
    }
    return Cookie.set(name, value, opts);
  },

  get: function (name) {
    return Cookie.get(name);
  },

  delete: function (name, options) {
    var opts = {expires: -1};
    if(options !== undefined) {
      opts = Object.assign(options, opts);
    }
    this.set(name, '', opts);
  }
};

module.exports = Cookie;
