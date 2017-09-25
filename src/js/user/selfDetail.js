/**
 * @author: zhanghuan
 * @create: 2017/9/20
 * @describe: 个人详情
 */
"use strict";
import URL from '../../urlConfig';
import axios from '../../ajax';
export default {
  name: 'selfDetail',
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    goBack: function () {
      window.history.go(-1);
    },
    getUserById: function (id) {
      let ths = this;
      axios.get(URL.user.list + '?id=' + id)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.userInfo = data.data;
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  },
  created: function () {
    let tempData = JSON.parse(window.localStorage.getItem('tempData'));
    let id = tempData.tempId;
    this.getUserById(id);
  }
}
