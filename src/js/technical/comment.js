/**
 * @author: zhanghuan
 * @create: 2017/9/19
 * @describe: 技术交流评论页面
 */
"use strict";
import URL from '../../urlConfig';
import axios from '../../ajax';
export default {
  name: 'techComment',
  data () {
    return {
      techData: {},
      commentData: []
    }
  },
  methods: {
    goBack: function () {
      window.history.go(-1);
    },
    getTechById: function (id) {
      let ths = this;
      axios.get(URL.technical.techOne + '&clinicId=' + id)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.techData = data.data;
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    getCommentById: function (id) {
      let ths = this;
      axios.get(URL.technical.comment + '&clinicId=' + id)
        .then(function (response) {
          let data = response.data;
          if (data.code === '1' && data.data) {
            ths.commentData = data.data.rows;
            /*for (var i = 0, l = data.data.rows.length; i < l; i++) {
              ths.$set(ths.commentData, i, data.data.rows[i]);
            }
            console.log("dd",ths.commentData);*/
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

    this.getTechById(id);
    this.getCommentById(id);
  }
}
