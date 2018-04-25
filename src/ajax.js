/**
 * @author: zhanghuan
 * @create: 2017/9/14
 * @describe: 公共ajax配置
 */
"use strict";
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import * as Cookies from 'tiny-cookie';

let TOKEN = Cookies.get('token');
let loading = null;

if (TOKEN == 'null' || TOKEN == 'undefined') {
  TOKEN = '';
}

var ajax = axios.create({
  baseURL: 'static/mock/',
  timeout: 60000,
  headers: {'token': TOKEN || ''},
  //`transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
  transformResponse:[function(data){
    //在这里根据自己的需求改变数据
    layer.close(loading);
    var temData = JSON.parse(data);
    if (temData.code === '209') {
      layer.open({
        title: [Cookies.get('lang') === 'en' ? 'info' : '信息', 'background-color: #FF4351; color:#fff;'],
        content: temData.message,
        icon: 5,
        skin: 'msg',
        btn: [Cookies.get('lang') === 'en' ? 'sure' : '确认'],
        end: function () {
          console.log('%c' + temData.message, 'color: #00f; font-size: 20px;');
          top.location.replace(top.location.origin);
        }
      });
      return temData;
    }

    if (temData.code !== '200') {
      layer.open({
        title: [Cookies.get('lang') === 'en' ? 'info' : '信息', 'background-color: #FF4351; color:#fff;'],
        content: temData.message,
        icon: 5,
        skin: 'msg',
        time: 2000, //2秒后自动关闭
        btn: [Cookies.get('lang') === 'en' ? 'sure' : '确认'],
        end: function () {
          console.log('%c' + temData.message, 'color: #00f; font-size: 20px;');
        }
      });
    }
    return temData;
  }],
});

//添加一个请求拦截器
ajax.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  loading = layer.open({type: 2});
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(err);
});
Vue.use(VueAxios, ajax);
export default ajax;
