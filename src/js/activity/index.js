/**
 * @author: zhanghuan
 * @create: 2017/9/20
 * @describe: 活动入口
 */
"use strict";
import URL from '../../urlConfig';
import axios from '../../ajax';
export default {
  name: 'activity',
  data () {
    return {
      listData: [],
      chooseData: [],
      modelShow: false,
      activityData: [],
      showIndex: 0,
      menuData: [],
      key: '',
      showMenu: false,
      keyLoad: ''
    }
  },
  methods: {
    goBack: function () {
      window.history.go(-1);
    },
    getMenuData: function () {
      let ths = this;
      axios.get(URL.activity.menu)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.menuData = data.data;
            ths.key = ths.key ? ths.key : ths.menuData[0].key;
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    chooseMenu: function (key) {
      this.key = key;
      this.showMenu = !this.showMenu;
    },
    closeOrOpenMenu: function () {
      this.showMenu = !this.showMenu;
    },
    getUserList: function () {
      let ths = this;
      axios.get(URL.activity.userList)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.listData = data.data[0].detail_list;
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
      window.location.hash = '/selfDetail';
    },
    getActivityData: function (index) {
      this.modelShow = true;
      let ths = this;
      if (ths.activityData.length > 0) {
        ths.showIndex = index;
      }
      if (ths.keyLoad === ths.key) {
        return false;
      }
      axios.get(URL.activity.activityData + '?id=' + ths.key)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            let str = '';
            ths.$set(ths.activityData, 0, data.data.description);
            for (let i = 0, l = data.data.rules.length; i < l; i++) {
              str += '<div>' + data.data.rules[i] + '</div>';
            }
            ths.$set(ths.activityData, 1, str);
            ths.keyLoad = ths.key;
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    closeModel: function () {
      this.modelShow = false;
    },
    choose: function (id, i) {
      if (this.chooseData[i]) {
        this.$set(this.chooseData, i, null);
      } else {
        this.$set(this.chooseData, i, id);
      }
    },
    submitChoose: function () {
      let ids = '';
      for (let i = 0, l = this.chooseData.length; i < l; i++) {
        if (this.chooseData[i]) {
          ids += ',' + this.chooseData[i];
        }
      }
      ids = ids.substr(1);
      if (!ids.length) {
        layer.open({
          content: '最少选1人！',
          skin: 'msg',
          time: 2 //2秒后自动关闭
        });
      }
    }
  },
  created: function () {
    this.getUserList();
    this.getMenuData();
  }
}

