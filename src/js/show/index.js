/**
 * @author: zhanghuan
 * @create: 2017/9/20
 * @describe: 成果展示入口
 */
"use strict";
import URL from '../../urlConfig';
import axios from '../../ajax';
export default {
  name: 'show',
  data () {
    return {
      listData: [],
      dataId: '',
      allData: [],
      showMenu: false,
      choosed: ''
    }
  },
  methods: {
    goBack: function () {
      if (window.AndroidWebView && window.AndroidWebView.advanceBack) {
        window.AndroidWebView.advanceBack();
      } else {
        window.history.go(-1);
      }
    },
    getUserList: function () {
      let ths = this;
      axios.get(URL.show.userList)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.allData = data.data;
            if (!ths.dataId) {
              ths.dataId = ths.allData[0].id;
            }
            for (let i = 0, l = ths.allData.length; i < l; i++) {
              if (ths.dataId == ths.allData[i].id) {
                ths.listData = ths.allData[i].detail_list;
                ths.choosed = ths.allData[i].awards_name;
              }
            }
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    chooseMenu: function (id, choosed) {
      let ths = this;
      ths.dataId = id;
      ths.choosed = choosed;
      for (let i = 0, l = ths.allData.length; i < l; i++) {
        if (ths.dataId == ths.allData[i].id) {
          ths.listData = ths.allData[i].detail_list;
        }
      }
      this.showMenu = !this.showMenu;
    },
    closeOrOpenMenu: function () {
      this.showMenu = !this.showMenu;
    },
    goDetail: function (id) {
      let data = {
        "tempId": id
      };
      window.localStorage.setItem('tempData', JSON.stringify(data));
      window.location.hash = '/selfDetail';
    }
  },
  created: function () {
    let tempStr = window.location.href.split('?')[1];
    if (tempStr) {
      this.dataId = tempStr.split('=')[1];
    }
    this.getUserList();
  }
}
