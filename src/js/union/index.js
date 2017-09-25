/**
 * @author: zhanghuan
 * @create: 2017/9/18
 * @describe: 工会入口
 */
"use strict";
import URL from '../../urlConfig';
import axios from '../../ajax';

export default {
  name: "union",
  data () {
    return {
      listData: []
    }
  },
  methods: {
    getTechList: function () {
      let ths = this;
      axios.get(URL.union.techList)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.listData = data.data;
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    goDetail: function (id) {
      let data = {
        "tempId": id
      };
      window.localStorage.setItem('tempData', JSON.stringify(data));
      window.location.hash = '/techComment';
    },
    goShow: function () {
      window.location.hash = 'show';
    },
    goTrends: function () {
      window.AndroidWebView.intentToGuideListActivity();
    }
  },
  created: function () {
    this.getTechList();
  }
}
