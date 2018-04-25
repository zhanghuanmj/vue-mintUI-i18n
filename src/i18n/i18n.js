/**
 * author: zhanghuan
 * created: 2018/2/27
 * describe: 国际化
 */
"use strict";
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './langs';
import * as Cookies from 'tiny-cookie';

Vue.use(VueI18n);

//如果cookie里没有设置语言，就默认设为en
if (!Cookies.get('lang')) {
  Cookies.set('lang', 'en');
}

//从cookie中拿到用户的语言选择，如果没有，那默认英文。
const i18n = new VueI18n({
  locale: Cookies.get('lang') || 'en',
  messages,
});

export default i18n;
