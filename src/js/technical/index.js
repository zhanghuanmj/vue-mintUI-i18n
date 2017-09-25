/**
 * @author: zhanghuan
 * @create: 2017/9/19
 * @describe: 技术交流
 */
"use strict";
import URL from '../../urlConfig';
import axios from '../../ajax';

export default {
  name: 'technical',
  data () {
    return {
      listData: [],
      startY: 0,
      startScroll: 0,
      offset: 100,
      page: 1,
      pageSize: 10
    }
  },
  methods: {
    goBack: function () {
      window.history.go(-1);
    },
    getTechList: function () {
      let ths = this;
      axios.get(URL.technical.list + '?page=' + ths.page + '&pageSize=' + ths.pageSize)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.listData = ths.listData.concat(data.data);
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
    touchStart: function (e) {
      this.startY = e.targetTouches[0].pageY;
      this.startScroll = this.$el.scrollTop || 0;
    },
    touchMove: function (e) {
      /*let diff = e.targetTouches[0].pageY - this.startY - this.startScroll;
      if(diff > 0) {
        e.preventDefault();
      }*/
    },
    touchEnd: function (e) {
      //用于判断滑动是否在原地 ----begin
      let endY = e.changedTouches[0].pageY;
      let dy = this.startY - endY;

      //如果滑动距离太短
      if(Math.abs(dy) < 2) {
        console.log("滑动距离太短");
        return false;
      }

      let outerHeight = this.$el.querySelector('#wrapper').clientHeight;
      let innerHeight = this.$el.querySelector('.list-ul').clientHeight;
      let scrollTop = this.$el.querySelector('#wrapper').scrollTop;
      let bottom = innerHeight - outerHeight - scrollTop;
      if(bottom <= this.offset) {
        this.page++;
        this.getTechList();
      } else {

      }
    },
  },
  created: function () {
    var ths = this;
    this.getTechList({
      page: ths.page,
      pageSize: ths.pageSize
    });
  },
  mounted: function () {

  }
}
